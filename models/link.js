
const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
    minlength: 5
  },
  added: Date,
})

linkSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Link', linkSchema)