import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import reducers from "./reducers/index";

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(reducers, enhancer);
