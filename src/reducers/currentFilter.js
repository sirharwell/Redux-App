import { SET_FILTER } from '../actions/currentFilter';

const currentFilter = ( state = 'All', action ) => {
  switch ( action.type ) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default currentFilter;
