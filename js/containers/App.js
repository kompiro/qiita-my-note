import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Home from '../components/Home';
import DevTools from './DevTools';

class App extends Component {

  render() {
    const {store} = this.props;
    if (process.env.NODE_ENV === 'production') {
      console.info('production mode');
      return (
        <div>
          <Provider store={store}>
            {/* <Home /> is your app entry point */}
            <Home />
          </Provider>
        </div>
      );
    }
    console.warn('development mode');
    return (
      <div>
        {/* <Home /> is your app entry point */}
        <Provider store={store}>
          <div>
            <Home />
            <DevTools />
          </div>
        </Provider>
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object,
};

export default App;
