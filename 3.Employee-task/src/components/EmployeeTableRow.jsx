import React from 'react';
import PropTypes from 'prop-types';
import Employee from './Employee';

const EmployeeTableRow = ({ employee, onDelete, onEdit, onFire }) => {
  const handleDelete = () => {
    const shouldDelete = window.confirm(`Are you sure you want to delete ${employee.name}?`);
    if (shouldDelete) {
      onDelete(employee.id);
    }
  };

  const handleFire = () => {
    const shouldFire = window.confirm(`Are you sure you want to fire ${employee.name}?`);
    if (shouldFire) {
      onFire(employee.id);
    }
  };

  return (
    <tr className={employee.isFired ? 'fired' : ''}>
      <td>{employee.name}</td>
      <td>{employee.surname}</td>
      <td>{employee.age}</td>
      <td>{employee.salary}</td>
      <td>{employee.isFired ? 'Fired' : 'Active '}</td>
      <td>
        <button onClick={() => onEdit(employee)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleFire}>Fire</button>
      </td>
    </tr>
  );
};

EmployeeTableRow.propTypes = {
  employee: Employee.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onFire: PropTypes.func.isRequired,
};

export default EmployeeTableRow;
