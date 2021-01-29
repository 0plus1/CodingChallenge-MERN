import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers/index';

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(reducers, applyMiddleware(promiseMiddleware));
