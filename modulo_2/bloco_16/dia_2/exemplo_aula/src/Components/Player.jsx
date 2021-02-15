import React from "react";
import { connect } from "react-redux";

class Player extends React.Component {
  render() {
    const { selectedMovie, selectedCategory } = this.props;
    return (
      <section>
        <h2>{selectedMovie.title}</h2>
        <h3>
          {selectedCategory.name} - {selectedMovie.released}
        </h3>
        <iframe
          width="580"
          height="350"
          src={selectedMovie.link}
          title="movie trailer"
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedMovie: state.movieReducer.selectedMovie,
  selectedCategory: state.movieReducer.selectedCategory,
});

export default connect(mapStateToProps)(Player);
