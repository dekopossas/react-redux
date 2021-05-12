import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as MovieActions from '../actions/movieAction';

export class SideBar extends Component {

  render() {
    const { categories, selectMovie } = this.props;

    return (
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map((movie) => (
                <li key={movie.id}>
                  {movie.title} was released in {movie.released}
                  <button type="button" onClick={() => selectMovie(category, movie)}>
                    Selecionar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories:state.movieReducer.categories 
});

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (category, movie) => dispatch(MovieActions.selectMovie(category, movie))
});

export default connect(mapStateToProps, mapDispatchToProps) (SideBar);
