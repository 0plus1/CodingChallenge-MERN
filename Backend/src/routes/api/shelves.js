const express = require('express');

const router = express.Router();

const Shelf = require('../../Models/Shelf');
const Book = require('../../Models/Book');

// @route  GET api/shelves
// @desc   get all the shelves
// @access Public
router.get('/', async (req, res) => {
  try {
    const shelves = await Shelf.find().sort({ name: 1 });
    return res.json(shelves);
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

// @route    GET api/shelves/:id
// @desc     Get shelf by id
// @access   Public
router.get('/:id', async (req, res) => {
  try {
    const [shelf] = await Shelf.find({ _id: req.params.id });
    if (!shelf) {
      return res.status(404).json({ msg: 'Shelf not found' });
    }
    const books = await Book.find({ shelfId: req.params.id }, null, {
      sort: { title: 1 },
    });
    // eslint-disable-next-line no-underscore-dangle
    const data = { shelfId: shelf._id, shelfName: shelf.name, books };
    return res.json(data);
  } catch (err) {
    return res.status(500).send('Server Error');
  }
});

module.exports = router;
