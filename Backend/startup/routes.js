const helmet = require('helmet');
const cors = require('cors');
const express = require('express');

const home = require('../routes/home');
const shelves = require('../routes/shelves');
const books = require('../routes/books');


const error = require('../middleware/error');


module.exports = function(app) {
    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    app.use(express.static('public'));

    app.use(helmet());

    app.use(cors());


    app.use('/api/shelf', shelves);
    app.use('/api/book', books);
    app.use('/', home);


    app.use(error);
    app.use(function(err, req, res, next) {
        res.status(500).send('Something really went wrong ..!!!!');
    });
}