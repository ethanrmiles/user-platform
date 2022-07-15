const express = require('express')
const router = express.Router()
const { getUserById, update } = require('./userController')

router.get('/:id', getUserById)

router.put('/:id', update)

module.exports = router