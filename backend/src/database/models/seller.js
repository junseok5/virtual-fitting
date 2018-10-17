const mongoose = require('mongoose')
const { Schema } = mongoose
const crypto = require('crypto')
const token = require('lib/token')

const { PASSWORD_HASH_KEY: secret } = process.env

function hash (password) {
  return crypto.createHmac('sha256', secret).update(password).digest('hex')
}

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

Seller.statics.findByEmail = function (email) {
  return this.findOne({ email }).exec()
}

Seller.statics.localRegister = function ({ crn, companyName, email, password, managerName, contact, gender }) {
  const seller = new this({
    crn,
    companyName,
    email,
    password: hash(password),
    managerName,
    contact,
    gender
  })

  return seller.save()
}

Seller.methods.validatePassword = function (password) {
  const hashed = hash(password)
  return this.password === hashed
}

Seller.methods.generateToken = function () {
  const { _id, managerName } = this
  return token.generateToken({
    seller: {
      _id,
      managerName
    }
  }, 'seller')
}

module.exports = mongoose.model('Seller', Seller)