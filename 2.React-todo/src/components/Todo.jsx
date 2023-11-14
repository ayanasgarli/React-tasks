import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddToDo from './AddToDo';
import TodoList from './TodoList';

function Todo({ todos, setTodos }) {
  const [filteredTodos, setFilteredTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    setFilteredTodos([...todos, todo]); 
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setFilteredTodos(filteredTodos.filter((todo) => todo.id !== id)); 
  };

  const markAsDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
    setFilteredTodos(
      filteredTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const sortByDateDesc = () => {
    const sortedTodos = [...todos].sort((a, b) => new Date(b.todoDate) - new Date(a.todoDate));
    setTodos(sortedTodos);
    setFilteredTodos(sortedTodos);
  };

  const sortByCompleted = () => {
    const completedTodos = [...todos].filter((todo) => todo.isCompleted);
    setFilteredTodos(completedTodos);
  };

  const searchTodo = (text) => {
    const filtered = todos.filter((todo) =>
      todo.description.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  return (
    <>
      <AddToDo addTodo={addTodo} />
      <div>
        <button onClick={sortByDateDesc}>Sort by Date</button>
        <button onClick={sortByCompleted}>Sort Completeds</button>
      </div>
      <TodoList
        todos={filteredTodos} 
        deleteTodo={deleteTodo}
        markAsDone={markAsDone}
        searchTodo={searchTodo}
      />
    </>
  );
}

Todo.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
};

export default Todo;
