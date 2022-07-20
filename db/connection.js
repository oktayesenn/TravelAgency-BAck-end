const mongoose = require('mongoose');
require("dotenv").config();
mongoose.Promise = Promise;

let mongoURI = "";

if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = 'mongodb://localhost/bazaar';
}

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then((instance) => {
        console.log('Connected to Mongo!');
    }
    )
    .catch(err => {
        console.error('Error connecting to mongo', err);
    }
    );

module.exports = mongoose;