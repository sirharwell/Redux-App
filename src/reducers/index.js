import { combineReducers } from 'redux';
import todos from './todos';
import nextId from './nextId';
import currentFilter from './currentFilter';
import trips from './trips';

const rootReducer = combineReducers({
  todos, 
  nextId,
  currentFilter,
  trips,
})

export default rootReducer;
