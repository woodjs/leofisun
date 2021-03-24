import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'reset-css';
import './assets/scss/base.scss';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
