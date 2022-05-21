import { REGISTER_USER } from "./action"

let initialState = {};

export const registerUserReducer = (state = initialState, action) => {

    switch(action.type) {

        case REGISTER_USER:
            let newState = {
                ...state,
                ...action.payload
            };
            return newState;
        
        default:
            return state
        
    }
}