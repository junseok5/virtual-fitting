import axios from 'axios'
import queryString from 'query-string'

export const getProductList = ({
  category,
  keyword,
  sellerId
}) => axios.get(`/api/v1.0/products/?${queryString.stringify({category, keyword, sellerId})}`)

export const getProduct = (id) => axios.get(`/api/v1.0/products/${id}`)

export const writeProduct = ({
  productName,
  price,
  salesLink,
  category,
  subCategory,
  targetGender,
  freeShipping,
  modelPhotoFile,
  productPhotoFile
}) => {
  const data = new FormData()
  data.append('productName', productName)
  data.append('price', price)
  data.append('salesLink', salesLink)
  data.append('category', category)
  data.append('subCategory', subCategory)
  data.append('targetGender', targetGender)
  data.append('freeShipping', freeShipping)
  data.append('modelPhoto', modelPhotoFile)
  data.append('productPhoto', productPhotoFile)

  return axios.post(`/api/v1.0/products`, data)
}

export const editProduct = (id, patchData) => axios.patch(`/api/v1.0/products/${id}`, { patchData })

export const removeProduct = (id) => axios.delete(`/api/v1.0/products/${id}`)