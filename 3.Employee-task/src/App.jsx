import React, { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import EmployeeTable from './components/EmployeeTable';
import EditEmployee from './components/EditEmployee';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  const handleAdd = (employee) => {
    setEmployees([...employees, employee]);
    setShowAddForm(false);
  };

  const handleEdit = (employee) => {
    setEditEmployee(employee);
  };

  const handleSaveEdit = (editedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === editedEmployee.id ? editedEmployee : employee
      )
    );
    setEditEmployee(null);
  };

  const handleCancelEdit = () => {
    setEditEmployee(null);
  };

  const handleDelete = (id) => {
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
  };

  const handleFire = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, isFired: true } : employee
      )
    );
  };

  return (
    <>
      <button onClick={() => setShowAddForm(!showAddForm)}>Add Employee</button>
      {showAddForm && <AddEmployee onAdd={handleAdd} />}
      {editEmployee && (
        <EditEmployee
          employee={editEmployee}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}
      <EmployeeTable
        employees={employees}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onFire={handleFire}
      />
    </>
  );
};

export default App;
