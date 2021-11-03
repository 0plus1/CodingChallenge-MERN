import { combineReducers } from 'redux';
import { GET_BOOK, GET_ALL_BOOKS_FROM_SHELF } from '../actions/types';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK:
      return {
        ...state,
        books: [action.payload],
      };
    case GET_ALL_BOOKS_FROM_SHELF:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  books: booksReducer,
});

export default rootReducer;
