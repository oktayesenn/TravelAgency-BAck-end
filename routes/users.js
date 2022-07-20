const express = require('express')
const mongoose = require('mongoose')
const userController = require('../controllers/userLogin')
const router = express.Router()

router.get('/', userController.index)
router.post('/', userController.login)
router.post('/new', userController.register)
router.put('/:id', userController.edit)
router.delete('/:id', userController.delete)


module.exports = router