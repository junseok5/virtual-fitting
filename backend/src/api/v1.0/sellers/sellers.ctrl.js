const Joi = require('joi')
const Seller = require('database/model/seller')

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
  
}

exports.deleteSellerInfo = async (ctx) => {

}