import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'

// action types
const SHOW_MODAL = 'base/SHOW_MODAL'
const HIDE_MODAL = 'base/HIDE_MODAL'
const SET_MODAL_MESSAGE = 'base/SET_MODAL_MESSAGE'
const SHOW_SIDEBAR = 'base/SHOW_SIDEBAR'
const HIDE_SIDEBAR = 'base/HIDE_SIDEBAR'
const SHOW_SEARCHBAR = 'base/SHOW_SEARCHBAR'
const HIDE_SEARCHBAR = 'base/HIDE_SEARCHBAR'
const SET_SEARCH_INPUT = 'base/SET_SEARCH_INPUT'

// action creators
export const showModal = createAction(SHOW_MODAL)
export const hideModal = createAction(HIDE_MODAL)
export const setModalMessage = createAction(SET_MODAL_MESSAGE)
export const showSidebar = createAction(SHOW_SIDEBAR)
export const hideSidebar = createAction(HIDE_SIDEBAR)
export const showSearchbar = createAction(SHOW_SEARCHBAR)
export const hideSearchbar = createAction(HIDE_SEARCHBAR)
export const setSearchInput = createAction(SET_SEARCH_INPUT)

// initial state
const initialState = Map({
  modal: Map({
    remove: false, // 상품삭제 모달
    leave: false, // 회원탈퇴 모달
    error: false, // 서버 내부 에러 메세지 전달 모달
    password: false // 패스워드 변경 모달
  }),
  modalMessage: '',
  sidebar: Map({
    visible: false
  }),
  searchbar: Map({
    visible: false
  }),
  searchbox: ''
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
    const { modalName, modalMessage } = action.payload
    return state.set('modalMessage', modalMessage)
                .setIn(['modal', modalName], true)
  },
  [SHOW_SIDEBAR]: (state, action) => state.setIn(['sidebar', 'visible'], true),
  [HIDE_SIDEBAR]: (state, action) => state.setIn(['sidebar', 'visible'], false),
  [SHOW_SEARCHBAR]: (state, action) => state.setIn(['searchbar', 'visible'], true),
  [HIDE_SEARCHBAR]: (state, action) => state.setIn(['searchbar', 'visible'], false),
  [SET_SEARCH_INPUT]: (state, action) => state.set('searchbox', action.payload)
}, initialState)