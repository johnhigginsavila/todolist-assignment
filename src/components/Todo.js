import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text, onDelete}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >{text} <button onClick={onDelete}>Delete</button>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Todo;
