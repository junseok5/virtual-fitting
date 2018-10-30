import axios from 'axios'
import queryString from 'query-string'

export const getProductList = ({
  category,
  keyword,
  sellerId
}) => axios.get(`/api/v1.0/products/?${queryString.stringify({category, keyword, sellerId})}`)