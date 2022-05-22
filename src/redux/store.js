
import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

const configureStore = (preloadedState) => {

    const middlewares = [ThunkMiddleware];

    const composedEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer,preloadedState, composedEnhancer);

    return store;
}

export default configureStore;