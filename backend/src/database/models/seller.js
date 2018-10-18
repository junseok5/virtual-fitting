const mongoose = require('mongoose')
const { Schema } = mongoose
const crypto = require('crypto')
const token = require('lib/token')
const hash = require('lib/common/hash')

const Seller = new Schema({
  crn: String,
  companyName: String,
  email: String,
  password: String,
  managerName: String,
  contact: String,
  joinedDate: {
    type: Date,
    default: Date.now
  }
})

Seller.statics.findByEmail = function (email) {
  return this.findOne({ email }).exec()
}

Seller.statics.findExistancy = function ({ crn, email }) {
  return this.findOne({
    $or: [
      { crn },
      { email }
    ]
  }).exec()
}

Seller.statics.localRegister = function ({ crn, companyName, email, password, managerName, contact, gender }) {
  const seller = new this({
    crn,
    companyName,
    email,
    password: hash(password),
    managerName,
    contact
  })

  return seller.save()
}

Seller.statics.unregister = function (_id) {
  return this.deleteOne({ _id }).exec()
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

let SellerSchema = null

try {
  SellerSchema = mongoose.model('Seller', Seller)
} catch (e) {
  SellerSchema = mongoose.model('Seller')
}

module.exports = SellerSchema