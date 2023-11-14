import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, markAsDone, searchTodo }) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    searchTodo(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search todo"
        value={searchText}
        onChange={handleSearch}
      />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            markAsDone={markAsDone}
          />
        ))}
      </ul>
      </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  markAsDone: PropTypes.func.isRequired,
  searchTodo: PropTypes.func.isRequired,
};

export default TodoList;
