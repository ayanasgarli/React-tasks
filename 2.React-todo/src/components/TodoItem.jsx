import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, deleteTodo, markAsDone }) {
  return (
    <>
    <li style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
      {todo.description} - {new Date(todo.todoDate).toLocaleDateString()}
      <button onClick={() => markAsDone(todo.id)}>
        {todo.isCompleted ? 'Undo' : 'Done'}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
    </>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markAsDone: PropTypes.func.isRequired,
};

export default TodoItem;
