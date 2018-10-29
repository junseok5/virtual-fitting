import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'
import * as SellerAPI from 'lib/api/seller'

// action types
const SET_SELLER = 'seller/SET_SELLER'
const GET_SELLER_INFO = 'seller/GET_SELLER_INFO'
const PATCH_SELLER_INFO = 'seller/PATCH_SELLER_INFO'
const PATCH_SELLER_PASSWORD = 'seller/PATCH_SELLER_PASSWORD'
const CHANGE_INPUT_EDIT = 'seller/CHANGE_INPUT_EDIT'
const DELETE_SELLER_INFO = 'seller/DELETE_SELLER_INFO'
const INITIALIZE = 'seller/INITIALIZE'

// action creators
export const setSeller = createAction(SET_SELLER)
export const getSellerInfo = createAction(GET_SELLER_INFO, SellerAPI.getSellerInfo)
export const patchSellerInfo = createAction(PATCH_SELLER_INFO, SellerAPI.patchSellerInfo)
export const patchSellerPassword = createAction(PATCH_SELLER_PASSWORD, SellerAPI.patchSellerPassword)
export const changeInputEdit = createAction(CHANGE_INPUT_EDIT)
export const deleteSellerInfo = createAction(DELETE_SELLER_INFO, SellerAPI.deleteSellerInfo)
export const initialize = createAction(INITIALIZE)

// initial state
const initialState = Map({
  seller: null, // Map({ _id, managerName })
  logged: false,
  meta: null,
  result: null,
  error: null,
  editForm: Map({
    companyName: '',
    managerName: '',
    contact: ''
  })
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
  }),
  [CHANGE_INPUT_EDIT]: (state, action) => {
    const { name, value } = action.payload
    return state.setIn(['editForm', name], value)
  },
  ...pender({
    type: PATCH_SELLER_INFO,
    onSuccess: (state, action) => {
      return state.set('result', '업로드에 성공하였습니다.')
    },
    onFailure: (state, action) => {
      return state.set('error', '업로드에 실패하였습니다.')
    }
  }),
  ...pender({
    type: PATCH_SELLER_PASSWORD,
    onSuccess: (state, action) => {
      return state.set('result', '비밀번호 수정에 성공하였습니다.')
    },
    onFailure: (state, action) => {
      return state.set('error', '비밀번호 수정에 실패하였습니다.')
    }
  }),
  ...pender({
    type: DELETE_SELLER_INFO,
    onSuccess: (state, action) => {
      return state.set('result', '회원 탈퇴에 성공하였습니다.')
    },
    onFailure: (state, action) => {
      return state.set('error', '회원 탈퇴에 실패하였습니다.')
    }
  })
}, initialState)