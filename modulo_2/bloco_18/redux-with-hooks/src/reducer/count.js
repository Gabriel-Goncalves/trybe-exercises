import { UP, DOWN } from "../actions";

const INITIAL_STATE = {
  counter: 0,
};

const count = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UP:
      return {
        counter: state.counter + 1,
      };
    case DOWN:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default count;
