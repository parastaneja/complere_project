const express = require('express');

const routes = express.Router({ mergeParams: true });

const employeesController = require('./employees.controller');

routes.get('/', employeesController.getEmployeeList);
routes.get('/:employee_id', employeesController.getEmployeeDetails);
routes.post('/', employeesController.addEmployee);
routes.put('/:employee_id', employeesController.updateEmployee);
routes.delete('/:employee_id', employeesController.deleteEmployee);

module.exports = routes;
