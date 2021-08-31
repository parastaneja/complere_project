const employeesService = require('./employees.service');
const { successHandler } = require('../common/handlers');
const logger = require('../libs/logger')();
const { errorUtils } = require('../common/utils');

const getEmployeeList = async (req, res, next) => {
  try {
    const a = false;
    if (!a) {
      throw errorUtils.throwPreconditionFailed('A is not present');
    }
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
// handlers
// try catch
// next -> errorhandler -> API response
// validation
module.exports = {
  getEmployeeList,
};
