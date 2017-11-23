import * as types from '../constants/actionTypes'

const initialState = {}

const projects = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case types.CREATE_PROJECT_SUCCESS: {
      return Object.assign({}, state, payload)
    }

    case types.REMOVE_PROJECT_SUCCESS: {
      const { key } = payload

      delete state[key]

      return Object.assign({}, state)
    }

    case types.LOAD_PROJECTS_SUCCESS:
    case types.LOAD_PROJECT_SUCCESS:
      return payload

    default: {
      return state
    }
  }
}

export default projects
