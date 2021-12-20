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

app.use(cors())
app.use(express.json())

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/users', usersRouter)
app.use('/chats', chatsRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`)
})