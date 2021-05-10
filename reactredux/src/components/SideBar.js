import React from 'react';
import categories from '../data';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [...categories]
    }
  }

  render() {
    const { categories } = this.state;

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
