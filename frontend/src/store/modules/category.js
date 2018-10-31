import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'

// action types
const SET_SELECTED = 'base/SET_SELECTED'
const SHOW_SIDEBAR = 'base/SHOW_SIDEBAR'
const HIDE_SIDEBAR = 'base/HIDE_SIDEBAR'

// action creators
export const setSelected = createAction(SET_SELECTED)
export const showSidebar = createAction(SHOW_SIDEBAR)
export const hideSidebar = createAction(HIDE_SIDEBAR)

// initial state
const initialState = Map({
  selected: null,  // 선택한 카테고리
  sidebar: Map({
    visible: false
  })
})

// reducer
export default handleActions({
  [SET_SELECTED]: (state, action) => {
    return state.set('selected', action.payload)
  },
  [SHOW_SIDEBAR]: (state, action) => state.setIn(['sidebar', 'visible'], true),
  [HIDE_SIDEBAR]: (state, action) => state.setIn(['sidebar', 'visible'], false)
}, initialState)