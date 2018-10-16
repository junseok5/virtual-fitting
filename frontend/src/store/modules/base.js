import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'

// action types
const SHOW_MODAL = 'base/SHOW_MODAL'
const HIDE_MODAL = 'base/HIDE_MODAL'
const SET_MODAL_MESSAGE = 'base/SET_MODAL_MESSAGE'

// action creators
export const showModal = createAction(SHOW_MODAL)
export const hideModal = createAction(HIDE_MODAL)
export const setModalMessage = createAction(SET_MODAL_MESSAGE)

// initial state
const initialState = Map({
  modal: Map({
    remove: false, // 상품삭제 모달
    leave: false, // 회원탈퇴 모달
    error: false, // 서버 내부 에러 메세지 전달 모달
    password: false // 패스워드 변경 모달
  }),
  modalMessage: ''
})

// reducer
export default handleActions({
  [SHOW_MODAL]: (state, action) => {
    const { payload: modalName } = action
    return state.setIn(['modal', modalName], true)
  },
  [HIDE_MODAL]: (state, action) => {
    const { payload: modalName } = action
    return state.setIn(['modal', modalName], false)
  },
  [SET_MODAL_MESSAGE]: (state, action) => {
    const { payload: modalMessage } = action
    return state.set('modalMessage', modalMessage)
  }
}, initialState)