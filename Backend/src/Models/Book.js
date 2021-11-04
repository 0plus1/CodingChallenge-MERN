const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema(
  {
    title: "string",
    isbn: "string",
    shelfId: {
      type: Schema.Types.ObjectId,
      ref: "Shelf",
      required: true,
    },
  },
  { timestamps: true }
);
const Book = mongoose.model("Book", schema);

module.exports = Book;
