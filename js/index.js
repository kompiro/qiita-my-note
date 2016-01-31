import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import App from './containers/App';

const store = configureStore();

render(
  <App store={store}/>,
  document.getElementById('main')
);
