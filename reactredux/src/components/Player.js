import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Player extends Component {
  render() {
    const { category, movie } = this.props;
    return (
      <div>
        <h1>Category: {category.name}</h1>
        <h2>Movie: {movie.title}</h2>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  category: state.movieReducer.selectedCategory,
  movie: state.movieReducer.selectedMovie,
});

export default connect(mapStateToProps) (Player);
