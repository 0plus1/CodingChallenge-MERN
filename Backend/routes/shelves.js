const { Shelf } = require('../models/shelf');
const { Book } = require('../models/book');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    console.log('entering here .....');

    //const dbShelves = [];

    const shelves = await Shelf.find().sort('title');
    //dbShelves.push(shelves);

    //console.log(shelves);
    res.send(shelves);
});

router.get('/read/:id', async(req, res) => {
    const id = req.params.id;

    const books = await Book.find({ "shelf": `${id}`})
        .sort('title');
    res.send(books);
});



module.exports = router;