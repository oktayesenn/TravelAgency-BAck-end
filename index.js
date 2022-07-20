const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')


const usersRoute = require('./routes/users')
const toursRoute = require('./routes/tours')
const cityRoute = require('./routes/city')
const marketRoute = require('./routes/market')

//middleware
app.use(express.json())
app.use(cors())



app.use("/api/tours", toursRoute);
app.use("/api/users", usersRoute);
app.use("/api/city", cityRoute);
app.use("/api/market", marketRoute);


mongoose.connect(
    'mongodb+srv://@cluster0-qjqjd.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('Connected to MongoDB')
})
.catch(err => {
    console.log('Error:', err)
})

app.get('/', (req, res) => {
    console.log('connected to server')
    res.send('hello server')
})
app.get('/tours', (req, res) => {
    console.log('hello tours')
    res.send('tours page')
})
app.get('/users', (req, res) => {
    console.log('hello users')
    res.send('users page')
})
app.get('/alanya', (req, res) => {
    console.log('hello alanya')
    res.send('alanya page')
})
app.get('/market', (req, res) => {
    console.log('hello market')
    res.send('market page')
})
app.listen(1453, () => {
    console.log('listening on port 1453')
    }
)




