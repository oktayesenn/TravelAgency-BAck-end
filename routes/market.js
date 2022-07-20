const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const marketController = require('../controllers/userMarket')

router.get('/', marketController.index)
router.get('/:id', marketController.show)
router.post('/', marketController.create)
router.put('/:id', marketController.edit)
router.delete('/:id', marketController.delete)


module.exports = router

