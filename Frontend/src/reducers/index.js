import { combineReducers } from 'redux';

// eslint-disable-next-line no-unused-vars
const booksReducer = (state = [], action) => (state);

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
