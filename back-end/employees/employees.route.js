const express = require('express');

const routes = express.Router({ mergeParams: true });

const employeesController = require('./employees.controller');

routes.get('/', employeesController.getEmployeeList);

module.exports = routes;
