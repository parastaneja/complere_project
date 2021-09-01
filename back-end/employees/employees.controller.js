const employeesService = require('./employees.service');
const { successHandler } = require('../common/handlers');
const logger = require('../libs/logger')();
const { errorUtils } = require('../common/utils');
const { getEmployeeListValidation } = require('./employees.validation');

const getEmployeeList = async (req, res, next) => {
  try {
    const employeeParam = 'false';
    await getEmployeeListValidation.validateAsync({ employeeParam });
    const data = await employeesService.getEmployeeList();
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

// validation
module.exports = {
  getEmployeeList,
};
