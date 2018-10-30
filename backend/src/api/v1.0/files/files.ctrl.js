const uploadFile = require('lib/uploadFile')
const User = require('database/models/user')
const Product = require('database/models/product')

exports.uploadUserPhoto = async (ctx) => {
  const { files, user } = ctx.request
  const { _id } = user
  const { photo } = files

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

    const { filePath } = result
    const userData = await User.findById(_id).exec()
    if (!userData) {
      ctx.status = 403
      return
    }

    const patchedData = {
      ...userData.toObject(),
      photoUri: filePath
    }

    await userData.updateOne({ ...patchedData }).exec()
    ctx.status = 204
  } catch (e) {
    ctx.throw(500, e)
  }
}