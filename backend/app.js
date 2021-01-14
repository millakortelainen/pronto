require('dotenv').config()
const express = require('express')
const app = express()
const linkRouter = require('./controllers/link')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

app.use(requestLogger)
let MONGODB_URI = process.env.MONGODB_URI
if (process.env.NODE_ENV === 'development') {
    MONGODB_URI = process.env.TEST_MONGODB_URI
}

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connection to MongoDB:', error.message)
    })

app.use(express.static('build'))
app.use(express.json())
app.use('/api/link', linkRouter)

module.exports = app