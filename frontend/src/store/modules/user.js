import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'
import * as UserAPI from 'lib/api/user'

// action types
const SET_USER = 'user/SER_USER'
const GET_USER_INFO = 'user/GET_USER_INFO'
const PATCH_USER_INFO = 'user/PATCH_USER_INFO'
const PATCH_USER_PASSWORD = 'user/PATCH_USER_PASSWORD'
const UPLOAD_PHOTO = 'user/UPLOAD_PHOTO'
const CHANGE_INPPUT_EDIT = 'user/CHANGE_INPUT_EDIT'
const INITIALIZE = 'user/INITIALIZE'

// action creators
export const setUser = createAction(SET_USER)
export const getUserInfo = createAction(GET_USER_INFO, UserAPI.getUserInfo)
export const patchUserInfo = createAction(PATCH_USER_INFO, UserAPI.patchUserInfo)
export const patchUserPassword = createAction(PATCH_USER_PASSWORD, UserAPI.patchUserPassword)
export const uploadPhoto = createAction(UPLOAD_PHOTO, UserAPI.uploadPhoto)
export const changeInputEdit = createAction(CHANGE_INPPUT_EDIT)
export const initialize = createAction(INITIALIZE)

// initial state
const initialState = Map({
  user: null,  // Map({ _id, displayName })
  logged: false,
  meta: null,
  result: null,
  error: null,
  editForm: Map({
    displayName: '',
    phoneNum: ''
  })
})

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [SET_USER]: (state, action) => {
    const { payload: user } = action
    return state.set('user', Map(user))
                .set('logged', true)
  },
  ...pender({
    type: GET_USER_INFO,
    onSuccess: (state, action) => {
      const { data: user } = action.payload
      return state.set('meta', Map(user))
    }
  }),
  ...pender({
    type: PATCH_USER_INFO,
    onSuccess: (state, action) => {
      return state.set('result', '업로드에 성공하였습니다.')
    },
    onFailure: (state, action) => {
      const { status } = action.payload

      if (status === 400) state.set('error', '유효하지 않은 수정 값입니다.')
      else if (status === 403) state.set('error', '업로드에 실패하였습니다.')
      else if (status === 500) state.set('error', '서버 오류!')
    }
  }),
  ...pender({
    type: PATCH_USER_PASSWORD,
    onSuccess: (state, action) => {
      return state.set('result', '비밀번호 수정에 성공하였습니다.')
    },
    onFailure: (state, action) => {
      return state.set('error', '비밀번호 수정에 실패하였습니다.')
    }
  }),
  ...pender({
    type: UPLOAD_PHOTO,
    onSuccess: (state, action) => {
      return state.set('result', '업로드에 성공하였습니다.')
    },
    onFailure: (state, action) => {
      const { status } = action.payload

      if (status === 403) state.set('result', '잘못된 계정 정보입니다.')
      else if (status === 412) state.set('result', '업로드 할 사진이 존재하지 않습니다.')
      else if (status === 500) state.set('result', '서버 오류!')
    }
  }),
  [CHANGE_INPPUT_EDIT]: (state, action) => {
    const { name, value } = action.payload
    return state.setIn(['editForm', name], value)
  }
}, initialState)