const { Router } = require("express");
const { getAllBooks, getABook } = require("../controllers/book");
const bookRouter = Router();

bookRouter.get("/shelf/:shelfSlug/read", getAllBooks);
bookRouter.get("/book/:bookSlug/read", getABook);

module.exports = bookRouter;
