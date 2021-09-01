const dotenv = require('dotenv');

dotenv.config();

const environment = process.env.ENVIRONMENT;
module.exports = {
  pgsql: {
    environment,
    host: process.env.PGSQL_HOST,
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    database: process.env.PGSQL_DATABASE,
    port: process.env.PGSQL_PORT || 3306,
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
    debug: false,
    schema: process.env.PGSQL_SCHEMA,
  },
};
