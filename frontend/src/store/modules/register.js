import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'

import { pender } from 'redux-pender'
import * as AuthAPI from 'lib/api/auth'

// action types
const CHANGE_INPUT_USER = 'register/CHANGE_INPUT_USER'
const CHANGE_INPUT_SELLER = 'register/CHANGE_INPUT_SELLER'
const LOCAL_REGISTER_USER = 'register/LOCAL_REGISTER_USER'
const SET_RESULT = 'register/SET_RESULT'
const SET_ERROR = 'register/SET_ERROR'
const INITIALIZE = 'register/INITIALIZE'

// action creators
export const changeInputUser = createAction(CHANGE_INPUT_USER)
export const changeInputSeller = createAction(CHANGE_INPUT_SELLER)
export const localRegisterUser = createAction(LOCAL_REGISTER_USER, AuthAPI.localRegisterUser)
export const setResult = createAction(SET_RESULT)
export const setError = createAction(SET_ERROR)
export const initialize = createAction(INITIALIZE)

// initial state
const initialState = Map({
  userForm: Map({
    email: '',
    password: '',
    displayName: '',
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
  }),
  result: null,
  error: null
})

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [CHANGE_INPUT_USER]: (state, action) => {
    const { name, value } = action.payload
    return state.setIn(['userForm', name], value)
  },
  [CHANGE_INPUT_SELLER]: (state, action) => {
    const { name, value } = action.payload
    return state.setIn(['sellerForm', name], value)
  },
  ...pender({
    type: LOCAL_REGISTER_USER,
    onSuccess: (state, action) => {
      const { data: user } = action.payload
      return state.set('result', user)
    },
    onFailure: (state, action) => {
      const { status } = action.payload.response
      
      if (status === 400) return state.set('error', '잘못된 입력 값입니다.')
      if (status === 409) return state.set('error', '이미 존재하는 계정입니다.')
      if (status === 500) return state.set('error', '서버 에러! 다시 시도해주시기 바랍니다.')
    }
  }),
  [SET_RESULT]: (state, action) => {
    const result = action.payload
    return state.set('result', result)
  },
  [SET_ERROR]: (state, action) => {
    const error = action.payload
    return state.set('error', error)
  }
}, initialState)