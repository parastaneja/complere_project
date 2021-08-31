const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./libs/logger')();
const routes = require('./index.routes');

const app = express();
const PORT = 7000;

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => logger.info(`Employee server running on ${PORT}`));
