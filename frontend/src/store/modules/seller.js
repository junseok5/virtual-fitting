import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'

// action types
const SET_SELLER = 'seller/SET_SELLER'

// action creators
export const setSeller = createAction(SET_SELLER)

// initial state
const initialState = Map({
  seller: null, // Map({ _id, managerName })
  logged: false
})

// reducer
export default handleActions({
  [SET_SELLER]: (state, action) => {
    const { payload: seller } = action
    return state.set('seller', Map(seller))
                .set('logged', true)
  }
}, initialState)