const express = require('express');
const logger = require('./libs/logger')();

const app = express();
const PORT = 7000;

app.get('/', (req, res) => res.send('Hello Sid'));

app.listen(PORT, () => logger.info(`My server is running on port ${PORT}`));