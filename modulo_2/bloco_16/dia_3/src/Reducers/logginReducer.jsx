import * as actions from '../actions'

const INITIAL_STATE = {
  loggedPerson: {},
}

export default function logginReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actions.LOGGIN:
      return {
        ...state,
        loggedPerson: action.payload.login,
      }
    default:
      return state;
  }
}
