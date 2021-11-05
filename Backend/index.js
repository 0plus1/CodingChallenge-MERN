const winston = require('winston');

const { createBookCollection } = require('./models/book');

const express = require('express');
const app = express();

require('./startup/routes')(app);
require('./startup/db')();

// createBookCollection();

app.set('view engine', 'pug');

const port = process.env.PORT || 4000;

const server = app.listen(port, () => winston.info(`Listening on port ...... ${port}`));

module.exports = server;  