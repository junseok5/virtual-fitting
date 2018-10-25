import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'
import * as SellerAPI from 'lib/api/seller'

// action types
const SET_SELLER = 'seller/SET_SELLER'
const GET_SELLER_INFO = 'seller/GET_SELLER_INFO'
const INITIALIZE = 'seller/INITIALIZE'

// action creators
export const setSeller = createAction(SET_SELLER)
export const getSellerInfo = createAction(GET_SELLER_INFO, SellerAPI.getSellerInfo)
export const initialize = createAction(INITIALIZE)

// initial state
const initialState = Map({
  seller: null, // Map({ _id, managerName })
  logged: false,
  meta: null
})

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [SET_SELLER]: (state, action) => {
    const { payload: seller } = action
    return state.set('seller', Map(seller))
                .set('logged', true)
  },
  ...pender({
    type: GET_SELLER_INFO,
    onSuccess: (state, action) => {
      const { data: seller } = action.payload
      return state.set('meta', Map(seller))
    }
  })
}, initialState)