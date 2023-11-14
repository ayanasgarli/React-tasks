import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Todo App</h1>
      <Todo todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;

