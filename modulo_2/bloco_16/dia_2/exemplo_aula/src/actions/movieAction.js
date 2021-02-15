import SELECT_MOVIE from "./index";

const movieAction = (selectedMovie, selectedCategory) => ({
  type: SELECT_MOVIE,
  payload: {
    selectedMovie,
    selectedCategory,
  },
});

export default movieAction;
