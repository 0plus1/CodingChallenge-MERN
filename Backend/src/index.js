/* eslint-disable no-underscore-dangle */
const express = require('express');
const mongoose = require('mongoose');
const bookRoute = require('./Routes/book');

const Book = require('./Models/Book');
const Shelf = require('./Models/Shelf');

// const shelf1 = new Shelf({ name: 'Poetry', slug: 'poetry' }).save();
// const shelf2 = new Shelf({ name: 'Fiction', slug: 'fiction' }).save();

// // eslint-disable-next-line no-underscore-dangle
// console.log(new Book({ shelfId: shelf1._id, title: 'frost', isbn: '123444' }).save());
// console.log(new Book({ shelfId: shelf1._id, title: 'maiden blue', isbn: '123444' }).save());
// console.log(new Book({ shelfId: shelf1._id, title: 'volks wagen', isbn: '123444' }).save());
// console.log(new Book({ shelfId: shelf1._id, title: 'book title', isbn: '123444' }).save());
// console.log(new Book({ shelfId: shelf2._id, title: 'mandarin', isbn: '123444' }).save());
// console.log(new Book({ shelfId: shelf1._id, title: 'tilapia vaccine', isbn: '123444' }).save());
// console.log(new Book({ shelfId: shelf2._id, title: 'endurance test', isbn: '123444' }).save());
// eslint-disable-next-line max-len
// console.log(new Book({ shelfId: '61802ae4c377ad54681b9ff3', title: 'accccc', isbn: '123444' }).save());

const app = express();
const port = 5000;

// DB Connection
mongoose.connect('mongodb://127.0.0.1:27017/challenge', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to DB');
});

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Content-Range', '*');
  res.header('Access-Control-Expose-Header', 'Content-Range');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', bookRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
