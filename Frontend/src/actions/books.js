import axios from '../axios';
import { GET_ERRORS, GET_ALL_BOOKS_FROM_SHELF, GET_BOOK } from './types';

export const getAllBooksFromShelf = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/shelf/${id}/read`);
    const { data } = response;
    dispatch({
      type: GET_ALL_BOOKS_FROM_SHELF,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error,
    });
  }
};

export const getBook = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/book/${id}/read`);
    const { data } = response;
    dispatch({
      type: GET_BOOK,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error,
    });
  }
};
