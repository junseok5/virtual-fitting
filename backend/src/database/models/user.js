const mongoose = require('mongoose')
const { Schema } = mongoose
const token = require('lib/token')
const hash = require('lib/common/hash')

const User = new Schema({
  email: String,
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

User.statics.findByEmail = function (email) {
  return this.findOne({ email }).exec()
}

User.statics.findExistancy = function ({ email }) {
  return this.findOne({ email }).exec()
}

User.statics.findSocialId = function ({ provider, id }) {
  const key = `social.${provider}.id`
  return this.findOne({
    [key]: id
  })
}

User.statics.localRegister = function ({ email, password, displayName, phoneNum, gender }) {
  const user = new this({
    email,
    password: hash(password),
    displayName,
    phoneNum,
    gender
  })

  return user.save()
}

User.statics.socialRegister = function ({ email, displayName, provider, accessToken, socialId }) {
  const user = new this({
    email,
    displayName,
    social: {
      [provider]: {
        id: socialId,
        accessToken: accessToken
      }
    }
  })

  return user.save()
}

User.methods.validatePassword = function (password) {
  const hashed = hash(password)
  return this.password === hashed
}

User.methods.generateToken = function () {
  const { _id, displayName } = this
  return token.generateToken({
    user: {
      _id,
      displayName
    }
  }, 'user')
}

module.exports = mongoose.model('User', User)