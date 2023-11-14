import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddToDo({ addTodo }) {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() !== '' && description.length >= 3) {
      const newTodo = {
        id: Date.now().toString(), 
        description,
        isCompleted: false,
        todoDate: new Date().toString(),
      };
      addTodo(newTodo);
      setDescription('');
    } else {
      alert('Input cannot be empty! Please enter valid todo name (at least 3 characters)');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
    </>
  );
}

AddToDo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddToDo;
