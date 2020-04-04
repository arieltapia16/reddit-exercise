
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import Dashboard from './containers/Dashboard';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <Provider store={configureStore()}>
    <Dashboard />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();