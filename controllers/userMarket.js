const UserMarket = require('../models/Market');

module.exports = {
    index: (req, res) => {
        UserMarket.find().then((user) => {
            res.json(user);
        });
    },
    show: async (req, res) => {
        UserMarket.findById(req.params.id).then((user) => {
            res.json(user);
        });
    },
    create: async (req, res) => {
        UserMarket.create(req.body).then((user) => {
            res.json(user);
        });
    },
    edit: (req, res) => {
        UserMarket.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
            (user) => {
                res.json(user);
            }
        );
    },
    delete: (req, res) => {
        UserMarket.findByIdAndDelete(req.params.id).then((user) => {
            res.json(user);
        });
    }
}               
        
