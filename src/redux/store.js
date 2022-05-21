
import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

const configureStore = (preloadedState) => {

    const composedEnhancer = applyMiddleware(ThunkMiddleware);

    const store = createStore(rootReducer, composedEnhancer);

    return store;
}

export default configureStore;