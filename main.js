import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store.js';
import TodoManager from './components/todoManager.js';

ReactDOM.render(
  <Provider store={store}>
   <TodoManager />
  </Provider>,
  document.getElementById('content'));
