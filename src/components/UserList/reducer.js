
import { GET_ALL_USERS, GET_USER_BY_USERNAME } from "./action"

let initialState = [];

export const userListReducer = (state = initialState, action) => {
    let newState ;
    switch(action.type) {

        case GET_ALL_USERS:
            newState= [
                ...state,
                ...action.payload
            ];
            
            return newState;
        
        default: 
            return state;
        
    }
}

export const userReducer = (state = initialState, action) => {

    switch(action.type) {

        case GET_USER_BY_USERNAME:
            let newState = {
                ...state,
                ...action.payload
            };
            return newState;
        
        default: 
            return state;
    }
}