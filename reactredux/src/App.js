import React from 'react';
import SideBar from './components/SideBar';
import Player from './components/Player';
import categories from './data';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [...categories]
    }
  }

  render() {
    return (
      <div>
        <Player />
        <SideBar categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
