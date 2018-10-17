const Joi = require('joi')
const User = require('database/models/User')
const Seller = require('database/models/Seller')
const { getProfile } = require('lib/social')

exports.localRegisterUser = async (ctx) => {
  const { body } = ctx.request

  const schema = Joi.object({
    displayName: Joi.string().regex(/^[a-zA-Z0-9ㄱ-힣]{3,12}$/).required(),
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
