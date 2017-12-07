import * as types from '../constants/actionTypes'

const initialState = {
  uid: null,
  displayName: null,
  email: null
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_AUTH:
    case types.SIGNIN_SUCCESS:
      let { payload } = action

      return Object.assign({}, state, {
        uid: payload ? payload.uid : null,
        displayName: payload ? payload.displayName : null,
        email: payload ? payload.email : null,
        photoURL: payload ? payload.photoURL : null,
      })
    case types.SIGNOUT_SUCCESS: {
      return Object.assign({}, state, {
        uid: null,
        displayName: null,
        email: null,
        photoURL: null
      })
    }

    default: {
      return state
    }
  }
}

export default user
