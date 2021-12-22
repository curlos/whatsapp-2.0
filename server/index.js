const cookieSession = require("cookie-session")
const express = require('express')
const session = require('express-session');
const passport = require('passport')
const cors = require('cors')
require('dotenv').config()
require('./passport/strategies')

const app = express()


const PORT = process.env.PORT || 8888
const usersRouter = require('./routers/users')
const chatsRouter = require('./routers/chats')
const authRouter = require('./routers/auth')

app.use(cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 }))

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  origin: 'http://192.168.1.78:8080',
  methods: 'GET,PUT,POST,DELETE',
  credentials: true,
}))
app.use(express.json())

app.use('/users', usersRouter)
app.use('/chats', chatsRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`)
})