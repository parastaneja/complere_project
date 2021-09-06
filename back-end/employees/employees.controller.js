const employeesService = require('./employees.service');
const { successHandler } = require('../common/handlers');
const logger = require('../libs/logger')();
const { getEmployeeListValidation, getEmployeeDetailsValidation } = require('./employees.validation');

const getEmployeeList = async (req, res, next) => {
  try {
    const { query } = req;
    const employeeParam = 'false';
    await getEmployeeListValidation.validateAsync({ employeeParam });
    const data = await employeesService.getEmployeeList({ ...query });
    return successHandler({ data }, req, res);
  } catch (err) {
    logger.error({
      err,
      message: err.message,
      function_name: 'getEmployeeList',
    });
    return next(err);
  }
};

const getEmployeeDetails = async (req, res, next) => {
  try {
    const { params } = req;
    await getEmployeeDetailsValidation.validateAsync({ ...params });
    const data = await employeesService.getEmployeeDetails({ employee_id: params.employee_id });
    return successHandler({ data }, req, res);
  } catch (err) {
    logger.error({
      err,
      message: err.message,
      function_name: 'getEmployeeDetails',
    });
    return next(err);
  }
};

module.exports = {
  getEmployeeList,
  getEmployeeDetails,
};
