import React from 'react';
import Player from './components/Player';
import Sidebar from './components/Sidbar';
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
      <div className="App">
        <Player />
        <Sidebar categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
