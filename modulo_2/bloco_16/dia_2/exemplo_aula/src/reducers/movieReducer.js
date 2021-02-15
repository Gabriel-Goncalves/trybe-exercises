import SELECT_MOVIE from "../actions";
import categories from "../data";

const INITIAL_STATE = {
  selectedMovie: {},
  selectedCategory: {},
  categories,
};

export default function movieReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload.selectedMovie,
        selectedCategory: action.payload.selectedCategory,
      };
    default:
      return state;
  }
}
