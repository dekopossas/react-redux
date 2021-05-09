import React, { Component } from 'react'

class SideBar extends Component {

  render() {
    const { categories } = this.state;

    return (
      <div>
        {
          categories.map((category) => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>
                      {movie.title} feito em {movie.released};
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

export default SideBar;
