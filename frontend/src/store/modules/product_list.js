import { createAction, handleActions } from 'redux-actions'

import { Map, List, fromJS } from 'immutable'
import { pender } from 'redux-pender'

// action types
const GET_PRODUCT_LIST = 'product_list/GET_PRODUCT_LIST'

// action creators
export const getProductList = createAction(GET_PRODUCT_LIST)

// initial state
const initialState = Map({
  products: List(),
  lastPage: null
})

// reducer
export default handleActions({

}, initialState)