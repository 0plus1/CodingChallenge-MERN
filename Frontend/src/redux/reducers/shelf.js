import initialState from './initialState';
import { SAVE_SHELVES, GET_SHELVES} from '../actions/shelf';

const shelves = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type){
        case SAVE_SHELVES: {
            const { data } = payload;
            const allShelves = {
                data,
            };
            return state.shelves.concat(allShelves);
        }
        case GET_SHELVES: {
            return state.shelves;
        }
        default: 
            return state;
    }
}

export default shelves;