const mongoose = require('mongoose');

const { Schema } = mongoose;

const ShelfSchema = new Schema(
  {
    name: 'string',
    slug: 'string',
  },
  { timestamps: true },
);

const Shelf = mongoose.model('Shelf', ShelfSchema);

module.exports = Shelf;
