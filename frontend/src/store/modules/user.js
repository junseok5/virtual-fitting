import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'

// action types
const SET_USER = 'user/SER_USER'

// action creators
export const setUser = createAction(SET_USER)

// initial state
const initialState = Map({
  user: null,  // Map({ _id, displayName })
  logged: false
})

// reducer
export default handleActions({
  [SET_USER]: (state, action) => {
    const { payload: user } = action
    return state.set('user', Map(user))
                .set('logged', true)
  }
}, initialState)