import * as actions from '../actions'

const INITIAL_STATE = {
  registeredPeople: []
}

export default function registerReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actions.REGISTER:
      return {
        ...state,
        registeredPeople: [...state.registeredPeople, action.payload],
      }
    default:
      return state;
  }
}