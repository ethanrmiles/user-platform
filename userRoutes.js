const express = require('express')
const router = express.Router()
const functions = require('./userController')
const { getAllUsers, newUser } = require('./userController')

router.get('/', getAllUsers)

router.post('/', newUser)

module.exports = router