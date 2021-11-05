import axios from 'axios';
import * as shelvesAPI from './shelfApi';

const books = [];
const url = 'http://localhost:4000/api/book/';

export async function getBooksInDB() {
  const getBooksInDb = await axios.get(url);
  console.log(getBooksInDb);
  return getBooksInDb.status === 200 ? getBooksInDb.data : null;
}

export function getBooks() {
  return books;
}

export function getBook(id) {
  return books.find((m) => m._id === id);
}

export function saveBook(book) {
  const bookInDb = books.find((m) => m._id === book._id) || {};
  bookInDb.title = book.title;
  bookInDb.genre = shelvesAPI.shelvesInDB.find((g) => g._id === book.bookId);
  bookInDb.numberInStock = book.numberInStock;
  bookInDb.dailyRentalRate = book.dailyRentalRate;

  if (!bookInDb._id) {
    bookInDb._id = Date.now().toString();
    books.push(bookInDb);
  }

  return bookInDb;
}

export function deleteBook(id) {
  const bookInDb = books.find((m) => m._id === id);
  books.splice(books.indexOf(bookInDb), 1);
  return bookInDb;
}
