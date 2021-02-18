import { combineReducers } from 'redux';
import shelvesReducer from './shelvesReducers';
import booksReducer from './booksReducer';
// eslint-disable-next-line no-unused-vars

const rootReducer = combineReducers({
  shelves: shelvesReducer,
  books: booksReducer,
});

export default rootReducer;
