const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: 'string',
  slug: 'string',
}, { timestamps: true });

const Shelf = mongoose.model('Shelf', schema);

async function createShelf(){
   
   const shelf = new Shelf({
       name: 'Non-Fiction',
       slug: 'non-fiction'
   });
   
    const result = await shelf.save();
    console.log('RESULT+++', result);
}


exports.Shelf = Shelf;
exports.createShelf = createShelf;


