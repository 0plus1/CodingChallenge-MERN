import axios from 'axios';
import {
  GET_SINGLE_BOOK,
  GET_SINGLE_BOOK_ERROR,
  GET_SHELVES,
  GET_SHELVES_ERROR,
  GET_SINGLE_SHELF,
  GET_SINGLE_SHELF_ERROR,
} from './type';

const URL = 'http://localhost:5000/api';
export const getShelves = async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/shelves`);
    dispatch({
      type: GET_SHELVES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SHELVES_ERROR,
      payload: error,
    });
  }
};

export const getSingleShelf = async (dispatch, id) => {
  try {
    const res = await axios.get(`${URL}/shelves/${id}`);
    dispatch({
      type: GET_SINGLE_SHELF,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_SHELF_ERROR,
      payload: error,
    });
  }
};

export const getSingleBook = async (dispatch, id) => {
  try {
    const res = await axios.get(`${URL}/books/${id}`);
    dispatch({
      type: GET_SINGLE_BOOK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_BOOK_ERROR,
      payload: error,
    });
  }
};
