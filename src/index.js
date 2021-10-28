import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// For impilimanting reducer in the app

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers/crud';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
