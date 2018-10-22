const mongoose = require('mongoose')

const { Schema } = mongoose

const Product = new Schema({
  productName: String,
  price: Number,
  freeShipping: Boolean,
  category: String,
  subCategory: String,
  targetGender: String,
  salesLink: String,
  modelPhotoUri: String,
  productPhotoUri: String,
  virtualProductPhotoUri: String,
  reviewStatus: {
    type: Boolean,
    default: true
  },
  writer: Schema.Types.ObjectId,
  publishedDate: {
    type: Date,
    default: Date.now()
  }
})

// 한 페이지에 보일 상품 개수
const numOfProduct = 40

Product.statics.findList = function (query, page) {
  return this.find(query)
    .sort({ _id: -1 })
    .limit(numOfProduct)
    .skip((page - 1) * numOfProduct)
    .lean()
    .exec()
}

let ProductSchema = null

try {
  ProductSchema = mongoose.model('Product', Product)
} catch (e) {
  ProductSchema = mongoose.model('Product')
}

module.exports = ProductSchema