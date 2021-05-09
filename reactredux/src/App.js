import React from 'react';
import Player from './components/Player';
import SideBar from './components/SideBar';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Player />
        <SideBar />
      </div>
    );
  }
}

export default App;
