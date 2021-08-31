const express = require('express');

const { employeeRoutes } = require('./employees');

const apiRoutes = express.Router({ mergeParams: true });

apiRoutes.use('/employees', employeeRoutes);

module.exports = apiRoutes;
