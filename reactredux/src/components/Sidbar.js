import React from 'react'
import { connect } from 'react-redux';
import selectMovie from '../actions/movieAction';
class Sidebar extends React.Component {

  render() {
    const { categories, dispatch } = this.props

    return (
      <aside>
        {
          categories.map(category => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>
                      {movie.title} was released in {movie.released}
                      <button onClick={() => dispatch(selectMovie(category, movie))}>
                        Selecionar
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    )
  }
};

const mapStateToProps = (state) => ({
  categories: state.movieReducer.categories,
});

export default connect(mapStateToProps) (Sidebar);
