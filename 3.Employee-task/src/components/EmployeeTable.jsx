import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import EmployeeTableRow from './EmployeeTableRow';
import Employee from './Employee';

const EmployeeTable = ({ employees, onDelete, onEdit, onFire }) => {
  const [filter, setFilter] = useState('');
  const [showFiredOnly, setShowFiredOnly] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const filteredEmployees = useMemo(() => {
    let filtered = employees;

    // Filter search
    if (filter) {
      const filterLower = filter.toLowerCase();
      filtered = filtered.filter(
        (employee) =>
          employee.name.toLowerCase().includes(filterLower) ||
          employee.surname.toLowerCase().includes(filterLower)
      );
    }

    // Filter fired employees
    if (showFiredOnly) {
      filtered = filtered.filter((employee) => employee.isFired);
    }

    // Sort employees
    if (sortBy === 'salary') {
      filtered = filtered.sort((a, b) => a.salary - b.salary);
    } else if (sortBy === 'age') {
      filtered = filtered.sort((a, b) => a.age - b.age);
    } else if (sortBy === 'createdAt') {
      filtered = filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }


    return filtered;
  }, [employees, filter, showFiredOnly, sortBy]);

  const handleSort = (key) => {
    setSortBy(key);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <button onClick={() => setShowFiredOnly(!showFiredOnly)}>
        {showFiredOnly ? 'Show All Employees' : 'Filter Fired Employees'}
      </button>

      <button onClick={() => handleSort('salary')}>Sort by Salary</button>
      <button onClick={() => handleSort('age')}>Sort by Age</button>
      <button onClick={() => handleSort('createdAt')}>Sort by Created Date</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <EmployeeTableRow
              key={employee.id}
              employee={employee}
              onDelete={onDelete}
              onEdit={onEdit}
              onFire={onFire}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

EmployeeTable.propTypes = {
  employees: PropTypes.arrayOf(Employee).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onFire: PropTypes.func.isRequired,
};

export default EmployeeTable;
