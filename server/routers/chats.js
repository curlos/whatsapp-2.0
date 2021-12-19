const express = require('express')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body
    console.log(req.body)

    const user = await prisma.appUser.create({
      data: {
        username: username,
        password: password,
      }
    })
    res.json(user)
  } catch (err) {
    res.json({ err, })
  }
})

module.exports = router