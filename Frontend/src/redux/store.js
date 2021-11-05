import { createStore, combineReducers } from 'redux';
import books  from './reducers/book';
import shelves from './reducers/shelf';

const reducers = {
    books,
    shelves
};

const rootReducer = combineReducers(reducers);

const store = createStore(rootReducer);

export default store;
