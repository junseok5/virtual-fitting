import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'
import * as ProductAPI from 'lib/api/product'

// action types
const CHANGE_INPUT = 'product/CHANGE_INPUT'
const CHANGE_INPUT_PHOTO = 'product/CHANGE_INPUT_PHOTO'
const SET_PREVIEW_IMAGE = 'product/SET_PREVIEW_IMAGE'
const WRITE_PRODUCT = 'product/WRITE_PRODUCT'
const INITIALIZE = 'product/INITIALIZE'

// action creators
export const changeInput = createAction(CHANGE_INPUT)
export const changeInputPhoto = createAction(CHANGE_INPUT_PHOTO)
export const setPreviewImage = createAction(SET_PREVIEW_IMAGE)
export const writeProduct = createAction(WRITE_PRODUCT, ProductAPI.writeProduct)
export const initialize = createAction(INITIALIZE)

// initial state
const initialState = Map({
  form: Map({
    productName: '',
    price: 0,
    salesLink: '',
    category: '상의',
    subCategory: '',
    targetGender: '남',
    freeShipping: "true",
    modelPhotoFile: null,
    productPhotoFile: null
  }),
  previewImage: Map({
    modelPhotoFile: '',
    productPhotoFile: ''
  }),
  result: null,
  error: null
})

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload
    return state.setIn(['form', name], value)
  },
  [CHANGE_INPUT_PHOTO]: (state, action) => {
    const { type, file } = action.payload
    return state.setIn(['form', type], file)
  },
  [SET_PREVIEW_IMAGE]: (state, action) => {
    const { type, url } = action.payload
    return state.setIn(['previewImage', type], url)
  },
  ...pender({
    type: WRITE_PRODUCT,
    onSuccess: (state, action) => {
      return state.set('result', '상품 등록에 성공하였습니다.')
    },
    onFailure: (state, action) => {
      const { status } = action.payload.response

      if (status === 400) return state.get('error', '잘못된 입력 값입니다.')
      else if (status === 500) return state.get('error', '서버 오류!')
    }
  })
}, initialState)