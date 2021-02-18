const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('../config/db');

// const Book = require('./Models/Book');
// const Shelf = require('./Models/Shelf');

const app = express();

// DB Connection
connectDB();
mongoose.connect('mongodb://127.0.0.1:27017/challenge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to DB');
});

app.use(cors());

app.use('/api/shelves', require('./routes/api/shelves'));
app.use('/api/books', require('./routes/api/books'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
