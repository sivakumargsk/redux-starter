import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './state/store.js';
import TodoManager from './components/todoManager.js';

render(
  <Provider store={store}>
    <TodoManager />
</Provider>,
  document.getElementById('content'));
