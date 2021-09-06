const express = require('express');

const routes = express.Router({ mergeParams: true });

const employeesController = require('./employees.controller');

routes.get('/', employeesController.getEmployeeList);
routes.get('/:employee_id', employeesController.getEmployeeDetails);

module.exports = routes;
