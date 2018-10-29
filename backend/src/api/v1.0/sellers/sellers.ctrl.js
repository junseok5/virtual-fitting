const Joi = require('joi')
const Seller = require('database/models/seller')
const hash = require('lib/common/hash')

// Regex definition
const displayNameRegex = /^[a-zA-Z0-9ㄱ-힣]{2,12}$/

exports.getSellerInfo = async (ctx) => {
  const { seller } = ctx.request
  const { _id } = seller

  try {
    const sellerData = await Seller.findById(_id).exec()
    if (!sellerData) {
      ctx.status = 403
      return
    }
    ctx.body = sellerData
  } catch (e) {
    ctx.throw(500, e)
  }
}

exports.patchSellerInfo = async (ctx) => {
  const { seller } = ctx.request
  const { _id } = seller

  const availableFields = {
    managerName: true,
    contact: true,
    companyName: true
  }

  const schema = Joi.object({
    managerName: Joi.string().regex(displayNameRegex),
    contact: Joi.string(),
    companyName: Joi.string()
  })

  const { body: patchData } = ctx.request

  const result = Joi.validate(patchData, schema)
  if (result.error) {
    ctx.status = 400
    return
  }

  for (let fieled in patchData) {
    if (!availableFields[fieled]) {
      ctx.status = 403
      return
    }
  }

  try {
    let sellerData = await Seller.findById(_id).exec()

    if (!sellerData) {
      ctx.status = 403
      return
    }

    const patchedData = {
      ...sellerData.toObject(),
      ...patchData
    }

    await sellerData.updateOne({ ...patchedData }).exec()
    ctx.body = sellerData
  } catch (e) {
    ctx.throw(500, e)
  }
}

exports.patchSellerPassword = async (ctx) => {
  const { seller } = ctx.request
  const { _id } = seller

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
    let sellerData = await Seller.findById(_id).exec()

    if (!sellerData) {
      ctx.status = 403
      return
    }

    const validated = sellerData.validatePassword(passwordBefore)
    if (!validated) {
      // wrong password
      ctx.status = 403
      return
    }

    const patchedData = {
      ...sellerData.toObject(),
      password: hash(passwordNew1)
    }

    await sellerData.updateOne({ ...patchedData }).exec()
    ctx.status = 204
  } catch (e) {
    ctx.throw(500, e)
  }
}

exports.deleteSellerInfo = async (ctx) => {
  const { seller } = ctx.request
  const { _id } = seller

  try {
    await Seller.unregister(_id)
  } catch (e) {
    ctx.throw(500, e)
  }

  ctx.cookies.set('access_token', null, {
    maxAge: 0,
    httpOnly: true
  })
  ctx.status = 204
}