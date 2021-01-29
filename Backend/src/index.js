const express = require('express');
const mongoose = require('mongoose');

const Book = require('./Models/Book');
const Shelf = require('./Models/Shelf');

const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
