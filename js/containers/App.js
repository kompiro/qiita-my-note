import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Home from '../components/Home';
import DevTools from './DevTools';

class App extends Component {

  render() {
    const {store} = this.props;
    if (process.env.NODE_ENV === 'production') {
      /* eslint-disable no-console */
      console.info('production mode');
      /* eslint-enable no-console */
      return (
        <div>
          <Provider store={store}>
            {/* <Home /> is your app entry point */}
            <Home />
          </Provider>
        </div>
      );
    }
    /* eslint-disable no-console */
    console.warn('development mode');
    /* eslint-enable no-console */
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
