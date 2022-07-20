const Tours = require("../models/Tours ")

module.exports = {
    index: (req, res) => {
        Tours.find()
        .then(tours => {
            res.json(tours)
        })
    },
    show: (req, res) => {
        Tours.findById(req.params.id)
        .then(tours => {
            res.json(tours)
        })
    },
    create: (req, res) => {
        Tours.create(req.body)
        .then(tours => {
            res.json(tours)
        })
    },
    edit: (req, res) => {
        Tours.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(tours => {
            res.json(tours)
        })
    },
    delete: (req, res) => {
        Tours.findByIdAndDelete(req.params.id)
        .then(tours => {
            res.json(tours)
        })
    }
}