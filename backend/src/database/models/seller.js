const mongoose = require('mongoose')
const { Schema } = mongoose

const Seller = new Schema({
  crn: {
    type: String,
    required: true
  },
  companyName: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  managerName: String,
  contact: String,
  gender: String,
  joinedDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Seller', Seller)