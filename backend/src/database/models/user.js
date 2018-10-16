const mongoose = require('mongoose')
const { Schema } = mongoose.Schema

const User = new Schema({
  email: {
    type: String,
    required: true
  },
  social: {
    facebook: {
      id: String,
      accessToken: String
    },
    google: {
      id: String,
      accessToken: String
    }
  },
  password: String,
  displayName: String,
  phoneNum: String,
  gender: String,
  photoUri: String,
  fittingPhotoUri: String,
  joinedDate: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('User', User)