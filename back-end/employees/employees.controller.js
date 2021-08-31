const employeesService = require('./employees.service');
const { successHandler } = require('../common/handlers');

const getEmployeeList = async (req, res) => {
  const data = await employeesService.getEmployeeList();
  return successHandler({ data }, req, res);
};
// handlers
// try catch
// next -> errorhandler -> API response
// validation
module.exports = {
  getEmployeeList,
};
