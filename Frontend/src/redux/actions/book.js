export const SAVE_BOOKS = 'SAVE_BOOKS';
export const saveBooks = data => ({
    type: SAVE_BOOKS,
    payload: data
});

export const GET_BOOKS = 'GET_BOOKS';
export const getBooks = () => ({
    type: GET_BOOKS,
});