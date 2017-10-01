import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => (
  <ul>
    {todos.map(todo => (
      <div key={todo.id}>
        <Todo
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onDelete={() => onDeleteClick(todo.id)}
        />
      </div>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default TodoList;
