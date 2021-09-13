const Joi = require('joi');

const employeeParam = Joi.string()
  .required()
  .label('Employee Param');

const employee_id = Joi.string()
  .required()
  .label('Employee Id');

const first_name = Joi.string()
  .required()
  .label('Employee First Name');
const last_name = Joi.string()
  .required()
  .label('Employee Last Name');
const getEmployeeListValidation = Joi.object({
  employeeParam,
});

const getEmployeeDetailsValidation = Joi.object({
  employee_id,
});

const addEmployeeValidation = Joi.object({
  first_name,
  last_name,
});

const updateEmployeeValidation = Joi.object({
  employee_id,
  first_name,
  last_name,
});

const deleteEmployeeValidation = Joi.object({
  employee_id,
});
module.exports = {
  getEmployeeListValidation,
  getEmployeeDetailsValidation,
  addEmployeeValidation,
  updateEmployeeValidation,
  deleteEmployeeValidation,
};
