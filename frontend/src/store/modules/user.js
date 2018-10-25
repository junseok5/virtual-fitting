import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'
import { pender } from 'redux-pender'
import * as UserAPI from 'lib/api/user'

// action types
const SET_USER = 'user/SER_USER'
const GET_USER_INFO = 'user/GET_USER_INFO'

// action creators
export const setUser = createAction(SET_USER)
export const getUserInfo = createAction(GET_USER_INFO, UserAPI.getUserInfo)

// initial state
const initialState = Map({
  user: null,  // Map({ _id, displayName })
  logged: false,
  meta: null
})

// reducer
export default handleActions({
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
  })
}, initialState)