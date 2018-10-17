const mongoose = require('mongoose')

const { Schema } = mongoose

const Product = new Schema({
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  freeShipping: Boolean,
  category: String,
  subCategory: String,
  targetGender: String,
  salesLink: String,
  modelPhotoUri: {
    type: String,
    required: true
  },
  productPhotoUri: {
    type: String,
    required: true
  },
  virtualProductPhotoUri: String,
  reviewStatus: {
    type: Boolean,
    default: true
  },
  writer: {
    type: Schema.types.ObjectId,
    required: true
  },
  publishedDate: {
    type: Date,
    default: Date.now()
  }
})

// 한 페이지에 보일 상품 개수
const numOfProduct = 40

Product.statics.findList = function (page) {
  return this.find()
    .sort({ _id: -1 })
    .limit(numOfProduct)
    .skip((page - 1) * numOfProduct)
    .lean()
    .exec()
}

Product.statics.findByCategory = function (category, page) {
  return this.find({ category })
    .sort({ _id: -1 })
    .limit(numOfProduct)
    .skip((page - 1) * numOfProduct)
    .lean()
    .exec()
}

Product.statics.findByKeyword = function (keyword, page) {
  return this.find({ productName: keyword })
    .sort({ _id: -1 })
    .limit(numOfProduct)
    .skip((page - 1) * numOfProduct)
    .lean()
    .exec()
}

module.exports = mongoose.model('Product', Product)