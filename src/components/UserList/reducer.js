
import { GET_ALL_USERS, GET_USER_BY_USERNAME, GET_USER_BY_SEARCH } from "./action"

let initialState = [];

export const userListReducer = (state = initialState, action) => {
    let newState ;
    switch(action.type) {

        case GET_ALL_USERS:
            newState= [
                ...action.payload
            ];
            
            return newState;
        
       
        default: 
            return state;
        
    }
}

export const userReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {

        case GET_USER_BY_SEARCH:
            newState= [
                ...action.payload
            ];

            return newState;
            
        
        default: 
            return state;
    }
}