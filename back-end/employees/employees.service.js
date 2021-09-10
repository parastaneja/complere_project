const { pgManager } = require('../managers');
const config = require('../config');
const logger = require('../libs/logger')();

const getEmployeeList = async ({
  employee_id, first_name, last_name, is_deleted, sort_by, sort_direction = 'asc', limit, skip,
}, { connection }) => {
  const conn = connection || await pgManager.getConnection();
  const params = [];
  const whereArray = [];

  let i = 1;
  if (first_name !== undefined) {
    whereArray.push(`first_name = $${i}`);
    params.push(first_name);
    i++;
  }
  if (employee_id !== undefined) {
    whereArray.push(`employee_id = $${i}`);
    params.push(employee_id);
    i++;
  }
  if (last_name !== undefined) {
    whereArray.push(`last_name = $${i}`);
    params.push(last_name);
    i++;
  }
  if (is_deleted !== undefined) {
    whereArray.push(`is_deleted = $${i}`);
    params.push(is_deleted);
    i++;
  }
  const whereString = whereArray.length > 0 ? `WHERE ${whereArray.join(' AND ')}` : '';
  const sortingString = sort_by && sort_direction ? `ORDER BY ${sort_by} ${sort_direction}` : '';
  const pagingString = limit && skip ? `LIMIT ${limit} OFFSET ${skip}` : '';
  const query = `
    SELECT * FROM ${config.pgsql.schema}.employee ${whereString} ${sortingString} ${pagingString}
    `;
  logger.info({
    function_name: 'getEmployeeList',
    query,
  });
  const { rows } = await conn.query(query, params);
  return rows;
};

const getEmployeeDetails = async ({ employee_id }) => {
  const rows = await getEmployeeList({ employee_id });
  return rows[0];
};

const addEmployee = async ({ first_name, last_name }, { connection } = {}) => {
  const conn = connection || (await pgManager.getConnection());
  const query = `
INSERT INTO ${config.pgsql.schema}.employee (first_name, last_name)
VALUES ($1, $2) returning*
  `;

  const params = [
    first_name, last_name,
  ];

  logger.info({
    message: 'query',
    function_name: 'addEmployee',
    query,
    params,
  });

  const { rows } = await conn.query(query, params);
  return rows[0];
};

module.exports = {
  getEmployeeList,
  getEmployeeDetails,
  addEmployee,
};
