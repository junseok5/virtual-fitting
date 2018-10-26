import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'
import * as UserAPI from 'lib/api/user'

// action types
const SET_USER = 'user/SER_USER'
const GET_USER_INFO = 'user/GET_USER_INFO'
const PATCH_USER_INFO = 'user/PATCH_USER_INFO'
const UPLOAD_PHOTO = 'user/UPLOAD_PHOTO'
const INITIALIZE = 'user/INITIALIZE'

// action creators
export const setUser = createAction(SET_USER)
export const getUserInfo = createAction(GET_USER_INFO, UserAPI.getUserInfo)
export const patchUserInfo = createAction(PATCH_USER_INFO, UserAPI.patchUserInfo)
export const uploadPhoto = createAction(UPLOAD_PHOTO, UserAPI.uploadPhoto)
export const initialize = createAction(INITIALIZE)

// initial state
const initialState = Map({
  user: null,  // Map({ _id, displayName })
  logged: false,
  meta: null,
  result: null
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

      if (status === 400) state.set('result', '유효하지 않은 수정 값입니다.')
      else if (status === 403) state.set('result', '업로드에 실패하였습니다.')
      else if (status === 500) state.set('result', '서버 오류!')
    }
  })
}, initialState)