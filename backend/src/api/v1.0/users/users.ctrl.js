const Joi = require('joi')
const User = require('database/models/user')
const fs = require('fs')
const uploadFile = require('lib/uploadFile')

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
  const { photo } = ctx.request.files
  console.log(ctx.request.files)
  if (!photo) {
    ctx.status = 412 // 사전조건 실패
    return
  }

  try {
    const result = await uploadFile(photo, 'user')
    if (!result) {
      ctx.status = 500
      return
    }
    ctx.status = 204
    return
  } catch (e) {
    ctx.throw(500, e)
  }
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