import React, { Component } from 'react'

class SideBar extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      categories: [
        {
          id: 1,
          name: "Drama",
          movies: [
            { id: 1, title: "The boy in the striped pajamas", released: 2008 },
            { id: 2, title: "The pursuit of hapiness", released: 2006 },
            { id: 3, title: "Fences", released: 2016 }
          ]
        },
        {
          id: 2,
          name: "Action",
          movies: [
            { id: 4, title: "Shooter", released: 2007 },
            { id: 5, title: "velozes e furiosos brasil", released:2012}
          ]
        },
        {
          id: 3,
          name: "Romantic",
          movies: [
            { id: 6, title: "Me before you", released: 2016 },
            { id: 7, title: "The lake house", released: 2006 }
          ]
        }
      ]
    }
  }
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
