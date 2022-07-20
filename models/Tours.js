// import mongoose from "mongoose";
const mongoose = require("mongoose");
// const Schema = mongoose.Schema;


const ToursSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number
});

const Tours = mongoose.model("Tours", ToursSchema);
module.exports = Tours;

