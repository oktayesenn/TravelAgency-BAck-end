const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const marketSchema = new Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    transaction: String,
    location: String,
    category: String,
    year: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const Market = mongoose.model("Market", marketSchema);
module.exports = Market;