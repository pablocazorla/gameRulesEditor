import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducers from 'rdx/reducers';
import App from 'views/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/styles.scss';

import * as serviceWorker from 'serviceWorker';

let store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
