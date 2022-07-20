const express = require('express')
const City = require('../models/City')
const router = express.Router()

router.post('/', (req, res) => {
    City.create(req.body)
    .then(city => {
        res.json(city)
    })
})
router.get('/', (req, res) => {
    City.find()
    .then(city => {
        res.json(city)
    })
})
router.get('/:id', (req, res) => {
    City.findById(req.params.id)
    .then(city => {
        res.json(city)
    })
})

router.delete('/:id', (req, res) => {
    City.findByIdAndRemove(req.params.id)
    .then(city => {
        res.json(city)
    })
})
router.put('/:id', (req, res) => {
    City.findByIdAndUpdate(req.params.id, req.body)
    .then(city => {
        res.json(city)
    })
})

module.exports = router


// router.get('/', habitsController.index)
// router.get('/:id', habitsController.show)
// router.post('/', habitsController.create)
// router.put('/:id', habitsController.edit)
// router.delete('/:id', habitsController.delete)