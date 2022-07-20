const express = require('express')
const Tours = require('../models/Tours')
const mongoose = require('mongoose')

const router = express.Router()


router.post('/', (req, res) => {
    Tours.create(req.body)
    .then(tours => {
        res.json(tours)
    })
})
router.get('/', (req, res) => {
    Tours.find()
    .then(tours => {
        res.json(tours)
    })
})
router.get('/:id', (req, res) => {
    Tours.findById(req.params.id)
    .then(tours => {
        res.json(tours)
    })
})

router.delete('/:id', (req, res) => {
    Tours.findByIdAndRemove(req.params.id)
    .then(tours => {
        res.json(tours)
    })
})
router.put('/:id', (req, res) => {
    Tours.findByIdAndUpdate(req.params.id, req.body)
    .then(tours => {
        res.json(tours)
    })
})

module.exports = router



