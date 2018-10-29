const Joi = require('joi')
const User = require('database/models/user')
const hash = require('lib/common/hash')

// Regex definition
const displayNameRegx = /^[a-zA-Z0-9ㄱ-힣]{3,12}$/

exports.getUserInfo = async (ctx) => {
  const { user } = ctx.request
  const { _id } = user

  try {
    const userData = await User.findById(_id).exec()
    if (!userData) {
      ctx.status = 403
      return
    }
    ctx.body = userData
  } catch (e) {
    ctx.throw(500, e)
  }
}

exports.patchUserInfo = async (ctx) => {
  const { user } = ctx.request
  const { _id } = user

  const availableFields = {
    displayName: true,
    phoneNum: true
  }

  const schema = Joi.object({
    displayName: Joi.string().regex(displayNameRegx),
    phoneNum: Joi.string()
  })

  const { body: patchData } = ctx.request

  const result = Joi.validate(patchData, schema)
  if (result.error) {
    ctx.status = 400
    return
  }

  for (let field in patchData) {
    if (!availableFields[field]) {
      ctx.status = 403
      return
    }
  }

  try {
    let userData = await User.findById(_id).exec()

    if (!userData) {
      ctx.status = 403
      return
    }

    const patchedData = {
      ...userData.toObject(),
      ...patchData
    }

    await userData.updateOne({ ...patchedData }).exec()
    ctx.body = userData
  } catch (e) {
    ctx.throw(500, e)
  }
}

exports.patchUserPassword = async (ctx) => {
  const { user } = ctx.request
  const { _id } = user

  const schema = Joi.object({
    passwordBefore: Joi.string().min(6).max(30),
    passwordNew1: Joi.string().min(6).max(30),
    passwordNew2: Joi.string().min(6).max(30)
  })

  const { body: patchData } = ctx.request

  const result = Joi.validate(patchData, schema)
  if (result.error) {
    ctx.status = 400
    return
  }

  const {
    passwordBefore,
    passwordNew1,
    passwordNew2
  } = patchData

  if (passwordNew1 !== passwordNew2) {
    ctx.status = 412
    return
  }

  try {
    let userData = await User.findById(_id).exec()

    if (!userData) {
      ctx.status = 403
      return
    }

    const validated = userData.validatePassword(passwordBefore)
    if (!validated) {
      // wrong password
      ctx.status = 403
      return
    }

    const patchedData = {
      ...userData.toObject(),
      password: hash(passwordNew1)
    }

    await userData.updateOne({ ...patchedData }).exec()
    ctx.status = 204
  } catch (e) {
    ctx.throw(500, e)
  }
}

exports.deleteUserInfo = async (ctx) => {
  const { user } = ctx.request
  const { _id } = user

  try {
    await User.unregister(_id)
  } catch (e) {
    ctx.throw(500, e)
  }

  ctx.cookies.set('access_token', null, {
    maxAge: 0,
    httpOnly: true
  })
  ctx.status = 204
}