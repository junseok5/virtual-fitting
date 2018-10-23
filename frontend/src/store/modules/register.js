import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'

// action types
const CHANGE_INPUT_USER = 'register/CHANGE_INPUT_USER'
const CHANGE_INPUT_SELLER = 'register/CHANGE_INPUT_SELLER'

// action creators
export const changeInputUser = createAction(CHANGE_INPUT_USER)
export const changeInputSeller = createAction(CHANGE_INPUT_SELLER)

// initial state
const initialState = Map({
  userForm: Map({
    email: '',
    password: '',
    name: '',
    phoneNum: '',
    gender: ''
  }),
  sellerForm: Map({
    crn: '',
    companyName: '',
    email: '',
    password: '',
    managerName: '',
    contact: ''
  })
})

// reducer
export default handleActions({
  [CHANGE_INPUT_USER]: (state, action) => {
    const { name, value } = action.payload
    return state.setIn(['userForm', name], value)
  },
  [CHANGE_INPUT_SELLER]: (state, action) => {
    const { name, value } = action.payload
    return state.setIn(['sellerForm', name], value)
  }
}, initialState)