const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    discreption: String,
    category: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const City = mongoose.model("City", citySchema);
module.exports = City;