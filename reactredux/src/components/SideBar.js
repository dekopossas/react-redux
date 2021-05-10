import React from 'react';

class SideBar extends React.Component {

  render() {
    const { categories } = this.props;

    return (
      <div>
        {
          categories.map(category => (
            <div key={category.id}>
              <h3>Categoria: {category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>filme: {movie.title} foi feito em: {movie.released}</li>
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


export default SideBar;
