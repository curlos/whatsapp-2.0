const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 8888
const usersRouter = require('./routers/users')
const chatsRouter = require('./routers/chats')

app.use(cors())
app.use(express.json())
app.use('/users', usersRouter)
app.use('/chats', chatsRouter)

app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`)
})