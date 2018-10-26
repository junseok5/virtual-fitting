const Joi = require('joi')
const User = require('database/models/user')

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

exports.uploadPhoto = async (ctx) => {
  const { photo, file } = ctx.request
  console.log(photo, file, ctx.req.photo, ctx.req.file, ctx.req)
}

exports.patchUserInfo = async (ctx) => {
  const { user } = ctx.request
  const { _id } = user

  const availableFields = {
    password: true,
    displayName: true,
    phoneNum: true
  }

  const schema = Joi.object({
    password: Joi.string(),
    displayName: Joi.string().regex(displayNameRegx),
    phoneNum: Joi.string()
  })

  const { body: patchData } = ctx.request

  const result = Joi.validate(patchData, schema)
  if (result.error) {
    ctx.body = {
      msg: 'Failed to vaildate patch data'
    }
    ctx.status = 400
    return
  }

  for (let field in patchData) {
    if (!availableFields[field]) {
      ctx.status = 403
      ctx.body = {
        msg: 'unsupported field'
      }
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
  ctx.status = 403
}