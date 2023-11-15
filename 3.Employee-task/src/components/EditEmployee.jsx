import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const EditEmployee = ({ employee, onSave, onCancel }) => {
  const [editedData, setEditedData] = useState({ ...employee });

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(editedData);
  };

  useEffect(() => {
    setEditedData({ ...employee });
  }, [employee]);

  return (
    <>
      <h2>Edit Employee</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={editedData.name} onChange={handleChange} />
        </label>
        <label>
          Surname:
          <input type="text" name="surname" value={editedData.surname} onChange={handleChange} />
        </label>
        <label>
          Age:
          <input type="number" name="age" value={editedData.age} onChange={handleChange} />
        </label>
        <label>
          Salary:
          <input type="number" name="salary" value={editedData.salary} onChange={handleChange} />
        </label>
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </>
  );
};

EditEmployee.propTypes = {
  employee: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditEmployee;
