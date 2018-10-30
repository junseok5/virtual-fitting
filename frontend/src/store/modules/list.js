import { createAction, handleActions } from 'redux-actions'

import { Map, List, fromJS } from 'immutable'
import { pender } from 'redux-pender'
import * as ListAPI from 'lib/api/list'

// action types
const GET_PRODUCT_LIST = 'list/GET_PRODUCT_LIST'

// action creators
export const getProductList = createAction(GET_PRODUCT_LIST, ListAPI.getProductList)

// initial state
const initialState = Map({
  products: List(),
  lastPage: null
})

// reducer
export default handleActions({
  ...pender({
    type: GET_PRODUCT_LIST,
    onSuccess: (state, action) => {
      const { data: products } = action.payload
      const lastPage = action.payload.headers['last-page']

      return state.set('products', fromJS(products))
                  .set('lastPage', parseInt(lastPage, 10))
    }
  })
}, initialState)