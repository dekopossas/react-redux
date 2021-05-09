import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    const { selectedMovie, selectedCategory } = this.props
    return (
      <div>
        <h1>Categoria: {selectedCategory.name}</h1>
        <h2>Filme: {selectedMovie.title}</h2>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  selectedCategory: state.movieReducer.selectedCategory,
  selectedMovie: state.movieReducer.selectedMovie,
});

export default connect(mapStateToProps) (Player) ;
