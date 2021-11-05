import initialState from './initialState';
import { SAVE_BOOKS, GET_BOOKS} from '../actions/book';

const books = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case SAVE_BOOKS: {
            const { data } = payload;
            const allBooks = {
                data,
                isRented: false,
            };
            return state.books.concat(allBooks);
        }
        case GET_BOOKS: {
            return state.books;
        }
        default: 
            return state;
    }
}

export default books;