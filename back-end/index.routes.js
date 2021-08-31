const express = require('express');
const { errorUtils } = require('./common/utils');
const logger = require('./libs/logger')();

const { employeeRoutes } = require('./employees');

const apiRoutes = express.Router({ mergeParams: true });

apiRoutes.use('/employees', employeeRoutes);

apiRoutes.use('*', (req, res, next) => {
  try {
    return errorUtils.throwNotFound('Route');
  } catch (e) {
    return next(e);
  }
});

module.exports = apiRoutes;
