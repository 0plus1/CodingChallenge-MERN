/* eslint-disable no-underscore-dangle */
const express = require('express');
const mongoose = require('mongoose');
const bookRoute = require('./Routes/book');

const app = express();
const port = 5000;

// DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/challenge', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to DB');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', bookRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
