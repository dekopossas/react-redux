import React from 'react';
import { connect } from 'react-redux';
import * as MovieAction from '../actions/movieAction';
class SideBar extends React.Component {

  render() {
    const { categories, selectedMovie } = this.props;

    return (
      <div>
        {
          categories.map(category => (
            <div key={category.id}>
              <h3>Categoria: {category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>
                      filme: {movie.title} foi feito em: {movie.released}
                      <button type="button" onClick={() => selectedMovie(category, movie)}>
                        Seleccionar
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.movieReducer.categories,
});

const mapDispatchToProps = (dispatch) => ({
  selectedMovie: (category, movie) => dispatch(MovieAction.selectedMovie(category, movie)),
});

export default connect(mapStateToProps, mapDispatchToProps) (SideBar);
