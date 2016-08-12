import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './reducers.js';

const reducers = combineReducers({
   todos: todos,
   visibilityFilter: visibilityFilter
});
const store = createStore(reducers);

export default store;
