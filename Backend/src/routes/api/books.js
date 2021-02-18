const express = require('express');

const router = express.Router();

const Book = require('../../Models/Book');
// @route  GET api/books
// @desc   get all the books
// @access Public

router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    if (!books) {
      return res.status(404).json({ msg: 'Books not found' });
    }
    return res.json(books);
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

// @route  GET api/books
// @desc   get a book by id
// @access Public

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    return res.json(book);
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
