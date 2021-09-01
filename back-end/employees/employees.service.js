const { pgManager } = require('../managers');
const config = require('../config');
const logger = require('../libs/logger')();

const getEmployeeList = async () => {
  const conn = await pgManager.getConnection();
  const query = `
    SELECT * FROM ${config.pgsql.schema}.employee order by employee_id desc
    `;
  logger.info({
    function_name: 'getEmployeeList',
    query,
  });
  const { rows } = await conn.query(query);
  return rows;
};

module.exports = {
  getEmployeeList,
};
