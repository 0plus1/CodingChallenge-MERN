import { GET_SHELVES, GET_SINGLE_SHELF } from '../actions/type';

const initialState = {
  shelves: [],
  shelfBooks: [],
  shelfId: null,
  shelfName: '',
};

const shelvesReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_SHELVES:
      return {
        ...state,
        shelves: payload,
      };
    case GET_SINGLE_SHELF:
      return {
        ...state,
        shelfBooks: payload.books,
        shelfId: payload.shelfId,
        shelfName: payload.shelfName,
      };
    default:
      return false;
  }
};

export default shelvesReducer;
