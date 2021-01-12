
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

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

module.exports = app