const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
    const db = config.get('db');
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => winston.info(`Connected to ${db}`));
    //.catch(err => console.log('Error: ', err.message));
}

// // DB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/challenge', { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to DB');
// });