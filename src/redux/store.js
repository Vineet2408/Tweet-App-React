
import { createStore, applyMiddleware, compose } from "redux";
import { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from "./reducers";

export default function configureStore(preloadedState) {

    const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

    const store = createStore(rootReducer, composedEnhancer);

    return store;
}