import React from 'react';
import SideBar from './components/SideBar';
import Player from './components/Player';

class App extends React.Component {

  render() {
    return (
      <div>
        <Player />
        <SideBar />
      </div>
    );
  }
}

export default App;
