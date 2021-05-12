import React from 'react';
import Player from './componets/Player';
import SideBar from './componets/SideBar';
import categories from './data';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [...categories],
    }
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <Player />
          <SideBar />
        </Provider>
      </div>
    );
  }
}

export default App;
