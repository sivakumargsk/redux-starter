import Redux from 'redux';
import { todoReducer, visibilityFilterReducer} from './reducers.js';

const reducers = Redux.combineReducers({
  visibilityFilter: visibilityFilterReducer,
  todos: todoReducer
});
const store = Redux.createStore(reducers);

export default store;
