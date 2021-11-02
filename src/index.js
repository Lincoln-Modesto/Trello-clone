import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home'
import { Provider } from 'react-redux';

import './styles/global.css'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

