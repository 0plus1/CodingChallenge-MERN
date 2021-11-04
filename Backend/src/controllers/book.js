const { Shelf, Book } = require("../Models");

const getAllBooks = async (req, res) => {
  try {
    const { shelfSlug } = req.params;
    const shelf = await Shelf.findOne({ slug: shelfSlug });
    if (!shelf)
      return res
        .status(404)
        .json({ status: false, message: "Shelf not found" });

    const books = await Book.find({ shelfId: shelf.id });

    res.status(200).json({ success: true, result: books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const getABook = async (req, res) => {
  try {
    const { bookSlug } = req.params;
    const book = await Book.findOne({ slug: bookSlug });
    if (!book)
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });

    res.status(200).json({ success: true, result: book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllBooks, getABook };
