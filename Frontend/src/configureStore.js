import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initalState = {};
// eslint-disable-next-line import/prefer-default-export

const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware()),
);

export default store;
