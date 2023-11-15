import PropTypes from 'prop-types';

const Employee = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  salary: PropTypes.number.isRequired,
  isFired: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
});

export default Employee;
