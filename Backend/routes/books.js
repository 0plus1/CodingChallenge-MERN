const { Book } = require('../models/book');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/', async(req, res) => {
    console.log('Calling me----')
    const books = await Book.find().sort('title');
    console.log(books);
    res.send(books);
});




module.exports = router;