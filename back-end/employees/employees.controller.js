const employeesService = require('./employees.service');

const getEmployeeList = async (req, res) => {
  const employeeList = await employeesService.getEmployeeList();
  res.send(employeeList);
};

module.exports = {
  getEmployeeList,
};
