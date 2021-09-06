const Joi = require('joi');

const employeeParam = Joi.string()
  .required()
  .label('Employee Param');

const employee_id = Joi.string()
  .required()
  .label('Employee Id');

const getEmployeeListValidation = Joi.object({
  employeeParam,
});

const getEmployeeDetailsValidation = Joi.object({
  employee_id,
});

module.exports = {
  getEmployeeListValidation,
  getEmployeeDetailsValidation,
};
