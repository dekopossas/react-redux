import React from 'react';
import Player from './components/Player';
import Sidebar from './components/Sidbar';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App">
        <Player />
        <Sidebar />
      </div>
    );
  }
}

export default App;
