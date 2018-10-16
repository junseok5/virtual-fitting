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
  reviewStatus: String,
  writer: {
    type: Schema.types.ObjectId,
    required: true
  },
  publishedDate: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Product', Product)