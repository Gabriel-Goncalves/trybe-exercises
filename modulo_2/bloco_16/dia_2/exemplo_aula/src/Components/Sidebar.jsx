import React from "react";
import "../style/Sidebar.css";
import movieAction from "../actions/movieAction";
import { connect } from "react-redux";

class Sidebar extends React.Component {
  render() {
    const { categories, select } = this.props;
    return (
      <section>
        {categories.map(category => (
          <section key={category.id}>
            <h2>{category.name}</h2>
            <ul>
              {category.movies.map(movie => (
                <li key={movie.id}>
                  {movie.title}
                  {' - '}
                  {movie.released}
                  <button type='button' onClick={() => select(movie, category)}>Select</button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  select: (selectedMovie, selectedCategory) =>
    dispatch(movieAction(selectedMovie, selectedCategory)),
});

const mapStateToProps = (state) => ({
  categories: state.movieReducer.categories,
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
