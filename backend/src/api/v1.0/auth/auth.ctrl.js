const Joi = require('joi')
const User = require('database/models/User')
const Seller = require('database/models/Seller')
const { getProfile } = require('lib/social')

// Regex definition
const displayNameRegex = /^[a-zA-Z0-9ㄱ-힣]{3,12}$/

exports.localRegisterUser = async (ctx) => {
  const { body } = ctx.request

  const schema = Joi.object({
    displayName: Joi.string().regex(displayNameRegex).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    phoneNum: Joi.string(),
    gender: Joi.string()
  })

  const result = Joi.validate(body, schema)

  // Schema Error
  if (result.error) {
    ctx.status = 400
    ctx.body = result.error
    return
  }

  const { displayName, email, password, phoneNum, gender } = body

  try {
    // check email
    const exists = await User.findExistancy({ email })

    if (exists) {
      ctx.status = 409
      ctx.body = 'email'
      return
    }

    const user = await User.localRegister({
      email, password, displayName, phoneNum, gender
    })

    ctx.body = {
      _id: user._id
    }

    const accessToken = await user.generateToken()

    // configure accessToken to httpOnly cookie
    ctx.cookies.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24
    })
  } catch (e) {
    ctx.throw(e, 500)
  }
}

exports.socialRegister = async (ctx) => {
  const { body } = ctx.request
  const { provider } = ctx.params

  const schema = Joi.object({
    displayName: Joi.string().regex(displayNameRegex).required(),
    accessToken: Joi.string().required()
  })

  const result = Joi.validate(body, schema)

  if (result.error) {
    ctx.status = 400
    ctx.body = result.error
    return
  }

  const {
    displayName,
    accessToken
  } = body

  // get social info
  let profile = null
  try {
    profile = await getProfile(provider, accessToken)
  } catch (e) {
    ctx.status = 403
    return
  }
  if (!profile) {
    ctx.status = 403
    return
  }

  const {
    email,
    id: socialId
  } = profile

  // check email
  if (profile.email) {
    // will check only email exists
    try {
      const exists = await User.findByEmail(profile.email)
      if (exists) {
        ctx.body = {
          key: 'email'
        }
        ctx.status = 409
        return
      }
    } catch (e) {
      ctx.throw(e, 500)
    }
  }

  let user = null
  try {
    user = await User.socialRegister({
      email,
      displayName,
      provider,
      accessToken,
      socialId
    })
  } catch (e) {
    ctx.throw(e, 500)
  }

  ctx.body = {
    displayName,
    _id: user._id
  }
}

exports.localUserLogin = async (ctx) => {
  const { body } = ctx.request

  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30)
  })

  const result = Joi.validate(body, schema)

  if (result.error) {
    ctx.status = 400
    return
  }

  const { email, password } = body

  try {
    // find user
    const user = await User.findByEmail(email)

    if (!user) {
      // user does not exist
      ctx.status = 403
      return
    }

    const validated = user.validatePassword(password)
    if (!validated) {
      // wrong password
      ctx.status = 403
      return
    }

    const accessToken = await user.generateToken()

    ctx.cookies.set('access_token', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7
    })

    const { displayName, _id } = user

    ctx.body = {
      _id,
      displayName
    }
  } catch (e) {
    ctx.throw(e, 500)
  }
}