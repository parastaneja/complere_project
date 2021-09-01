const Joi = require('joi');

const employeeParam = Joi.string()
  .required()
  .label('Employee Param');

const getEmployeeListValidation = Joi.object({
  employeeParam,
});

module.exports = {
  getEmployeeListValidation,
};
