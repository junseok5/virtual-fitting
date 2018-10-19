const Joi = require('joi')
const Seller = require('database/models/seller')

// Regex definition
const displayNameRegex = /^[a-zA-Z0-9ㄱ-힣]{3,12}$/

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
    ctx.throw(e, 500)
  }
}

exports.patchSellerInfo = async (ctx) => {
  const { seller } = ctx.request
  const { _id } = seller

  const availableFields = {
    password: true,
    managerName: true,
    contact: true
  }

  const schema = Joi.object({
    password: Joi.string(),
    managerName: Joi.string().regex(displayNameRegex),
    contact: Joi.string()
  })

  const { body: patchData } = ctx.request

  const result = Joi.validate(patchData, schema)
  if (result.error) {
    ctx.body = {
      msg: 'Failed to validate patchData'
    }
    ctx.status = 400
    return
  }

  for (let fieled in patchData) {
    if (!availableFields[fieled]) {
      ctx.status = 403
      ctx.body = {
        msg: 'unsupported field'
      }
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
    ctx.throw(e, 500)
  }
}

exports.deleteSellerInfo = async (ctx) => {
  const { seller } = ctx.request
  const { _id } = seller

  try {
    await Seller.unregister(_id)
  } catch (e) {
    ctx.throw(e, 500)
  }

  ctx.cookies.set('access_token', null, {
    maxAge: 0,
    httpOnly: true
  })
  ctx.status = 403
}