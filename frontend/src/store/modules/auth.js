import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'

// action types
const CHANGE_INPUT = 'auth/CHANGE_INPUT'
const SELECT_LOGIN_TYPE = 'auth/SELECT_LOGIN_TYPE'

// action creators
export const changeInput = createAction(CHANGE_INPUT)
export const selectLoginType = createAction(SELECT_LOGIN_TYPE)

// initial state
const initialState = Map({
  form: Map({
    email: '',
    password: ''
  }),
  loginType: 'user'
})

// reducer
export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload
    return state.setIn(['form', name], value)
  },
  [SELECT_LOGIN_TYPE]: (state, action) => {
    const value = action.payload
    return state.set('loginType', value)
  }
}, initialState)