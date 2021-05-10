import React from 'react';
import SideBar from './components/SideBar';
import Player from './components/Player';
import categories from './data';
import store from './store';

import { Provider } from 'react-redux';


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
        <Provider store={store}>
          <Player />
          <SideBar />
        </Provider>
      </div>
    );
  }
}

export default App;
