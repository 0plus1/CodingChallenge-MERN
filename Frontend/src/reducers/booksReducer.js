import { GET_SINGLE_BOOK } from '../actions/type';

const initialState = {
  book: {},
};

const bookReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_SINGLE_BOOK:
      return {
        ...state,
        book: payload,
      };
    default:
      return false;
  }
};
export default bookReducer;
