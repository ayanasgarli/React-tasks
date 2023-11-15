import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddEmployee = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: 0,
    salary: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: Date.now(),
      isFired: false,
      createdAt: new Date().toString(),
      updatedAt: new Date().toString(),
      ...formData,
    };
    onAdd(newEmployee);
    setFormData({
      name: '',
      surname: '',
      age: 0,
      salary: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Surname:
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <label>
        Salary:
        <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

AddEmployee.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddEmployee;

