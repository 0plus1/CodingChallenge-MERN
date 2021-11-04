import actionTypes from "../actions/types";

const booksReducer = (
  state = {
    isLoading: true,
    books: [],
    book: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case actionTypes.FETCH_A_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default booksReducer;
