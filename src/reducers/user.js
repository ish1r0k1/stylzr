/* @flow */
import * as types from '../constants/actionTypes'

type State = {
  uid: ?string,
  displayName: ?string,
  email: ?string
}

type Action = {
  type: string,
  payload: State
}

const initialState: State = {
  uid: null,
  displayName: null,
  email: null
}

const user = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case types.INIT_AUTH:
    case types.SIGNIN_SUCCESS:
      let { payload } = action

      if (payload) {
        return Object.assign({}, state, {
          uid: payload.uid,
          displayName: payload.displayName,
          email: payload.email
        })
      }

    case types.SIGNOUT_SUCCESS:
      return Object.assign({}, state, {
        uid: null,
        displayName: null,
        email: null
      })

    default: {
      return state
    }
  }
}

export default user
