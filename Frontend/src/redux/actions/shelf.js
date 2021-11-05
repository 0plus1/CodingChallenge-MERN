export const SAVE_SHELVES = 'SAVE_SHELVES';
export const saveShelves = data => ({
    type: SAVE_SHELVES,
    payload: data
});

export const GET_SHELVES = 'GET_SHELVES';
export const getShelves = () => ({
    type: GET_SHELVES,
});