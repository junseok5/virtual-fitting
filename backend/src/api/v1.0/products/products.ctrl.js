// product 정보를 클라이언트에게 보낼 때, 글자 수 잘라서 보내기
const Joi = require('joi')
const Product = require('database/models/product')
const uploadFile = require('lib/uploadFile')

/*
  [GET] /:id
*/
exports.getProductInfo = async (ctx) => {
  const { id } = ctx.params

  try {
    const productData = await Product.findById(id).exec()
    if (!productData) {
      ctx.status = 404
      return
    }
    ctx.body = productData
  } catch (e) {
    ctx.throw(500, e)
  }
}

/*
  [GET] /
*/
exports.getList = async (ctx) => {
  const page = parseInt(ctx.query.page || 1, 10)
  const { category, keyword, sellerId } = ctx.query

  // 카테고리 검색
  let query = null
  query = category ? {
    subCategory: category
  } : {}

  query = sellerId ? {
    ...query,
    writer: sellerId
  } : { ...query }

  query = keyword ? {
    ...query,
    $text: { $search: keyword }
  } : { ...query }

  if (page < 1) {
    ctx.status = 400
    return
  }

  try {
    const products = await Product.findList(query, page)
    const productsCount = await Product.countDocuments(query).exec()
    const limitTitleLength = product => ({
      ...product,
      productName: product.productName.length < 42 ? product.productName : `${product.productName.slice(0, 41)}...`
    })
    ctx.body = products.map(limitTitleLength)
    // 마지막 페이지 알려주기
    ctx.set('Last-Page', Math.ceil(productsCount / 20))
  } catch (e) {
    ctx.throw(500, e)
  }
}

/*
  [POST] /
*/
exports.writeProduct = async (ctx) => {
  const { seller, body, files } = ctx.request
  const { _id } = seller
  const { modelPhoto, productPhoto } = files

  if (!modelPhoto || !productPhoto) {
    ctx.status = 412
    return
  }

  const schema = Joi.object({
    productName: Joi.string().required(),
    price: Joi.number().integer().min(0).required(),
    freeShipping: Joi.string(),
    salesLink: Joi.string().required(),
    category: Joi.string(),
    subCategory: Joi.string(),
    targetGender: Joi.string()
  })

  const result = Joi.validate(body, schema)
  if (result.error) {
    console.log(result.error)
    ctx.status = 400
    ctx.body = result.error
    return
  }

  try {
    const resultMain = await uploadFile(productPhoto, 'products-main')
    const resultModel = await uploadFile(modelPhoto, 'products-model')

    if (!resultMain || !resultModel) {
      ctx.status = 500
      return
    }

    const { filePath: productPhotoUri } = resultMain
    const { filePath: modelPhotoUri } = resultModel

    const writer = _id
    const {
      productName,
      price,
      freeShipping,
      salesLink,
      category,
      subCategory,
      targetGender
    } = body
    const product = new Product({
      productName,
      price,
      freeShipping,
      salesLink,
      category,
      subCategory,
      targetGender,
      writer,
      productPhotoUri,
      modelPhotoUri
    })

    await product.save()
    ctx.body = product
  } catch (e) {
    ctx.throw(500, e)
  }
}

/*
  [PATCH] /:id
*/
exports.patchProduct = async (ctx) => {
  const { seller } = ctx.request
  const { id } = ctx.params // 삭제할 상품 id

  let productData = null
  try {
    productData = await Product.findById(id).exec()
    console.log(productData.writer, seller._id)

    // 상품이 없거나 그 상품의 관리자가 아닌 경우 인증 실패
    if (!productData || JSON.stringify(productData.writer) !== JSON.stringify(seller._id)) {
      ctx.status = 403
      return
    }
  } catch (e) {
    ctx.throw(500, e)
  }

  const availableFields = {
    productName: true,
    price: true,
    freeShipping: true,
    salesLink: true,
    category: true,
    subCategory: true,
    targetGender: true
  }

  const schema = Joi.object({
    productName: Joi.string().required(),
    price: Joi.number().integer().min(0),
    freeShipping: Joi.boolean(),
    salesLink: Joi.string(),
    category: Joi.string(),
    subCategory: Joi.string(),
    targetGender: Joi.string()
  })

  const { body: patchData } = ctx.request

  const result = Joi.validate(patchData, schema)
  if (result.error) {
    ctx.body = {
      msg: 'Failed to validate patch data'
    }
    ctx.status = 400
    return
  }

  for (let filed in patchData) {
    if (!availableFields[filed]) {
      ctx.status = 403
      ctx.body = {
        msg: 'unsupported filed'
      }
      return
    }
  }

  try {
    const patchedData = {
      ...productData.toObject(),
      ...patchData
    }

    await productData.updateOne({ ...patchedData }).exec()
    ctx.body = productData
  } catch (e) {
    ctx.throw(500, e)
  }
}

/*
  [DELETE] /:id
*/
exports.deleteProduct = async (ctx) => {
  const { seller } = ctx.request
  const { id } = ctx.params

  try {
    const productData = await Product.findById(id).exec()

    if (!productData || JSON.stringify(productData.writer) !== JSON.stringify(seller._id)) {
      ctx.status = 403
      return
    }

    await Product.deleteOne({ _id: id }).exec()
    ctx.status = 204
  } catch (e) {
    ctx.throw(500, e)
  }
}