import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todos';

const styles = {
  complete: { 
    textDecoration: 'line-through', 
    color: 'green',
  }
}

const Todo = ({ 
  id, 
  name, 
  complete, 
  dispatch 
}) => (
  <li
    style={ complete ? styles.complete : {} }
    onClick={ () => dispatch(toggleTodo(id)) }
  >
    {name}
  </li>
)

export default connect()(Todo)



