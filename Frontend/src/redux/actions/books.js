import APIClient from "../../http";
import actionTypes from "./types";

const stopLoading = () => ({ type: actionTypes.STOP_LOADING });

const getBooks = (category) => {
  return async (dispatch) => {
    try {
      const { data } = await APIClient(`/shelf/${category}/read`);
      dispatch({ type: actionTypes.FETCH_BOOKS, payload: data?.result });
    } catch (error) {
      // console.error(error.message);
    } finally {
      dispatch(stopLoading());
    }
  };
};
const getABook = (bookSlug) => {
  return async (dispatch) => {
    try {
      const { data } = await APIClient(`/book/${bookSlug}/read`);
      dispatch({ type: actionTypes.FETCH_A_BOOK, payload: data?.result });
    } catch (error) {
      // console.error(error);
    } finally {
      dispatch(stopLoading());
    }
  };
};

export default { getBooks, getABook };
