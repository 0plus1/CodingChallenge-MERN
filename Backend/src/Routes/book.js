const express = require('express');
const Book = require('../Models/Book');

const app = express();

const getBookById = (req, res) => {
  const { id } = req.params;

  Book.findOne()
    .where('_id').equals(id)
    .exec((error, book) => {
      if (error) {
        return res.status(500).json(error);
      }
      return res.status(200).json(book);
    });
};

const getBooksFromShelf = (req, res) => {
  const { id } = req.params;

  Book.find()
    .where('shelfId').equals(id)
    .exec((error, books) => {
      if (error) {
        return res.status(500).json(error);
      }
      return res.status(200).json(books);
    });
};

app.get('/book/:id/read', getBookById);
app.get('/shelf/:id/read', getBooksFromShelf);

module.exports = app;
