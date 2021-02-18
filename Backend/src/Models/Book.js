const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    shelfId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Shelf',
    },
    title: 'string',
    isbn: 'string',
  },
  { timestamps: true },
);

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
