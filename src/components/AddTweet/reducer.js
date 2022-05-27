
import { ADD_TWEET } from "./action"

let initialState = {};

export const addTweetReducer = (state = initialState, action) => {

    let newState;
    switch (action.type) {

        case ADD_TWEET: 
            newState =  {
                ...state,
                ...action.payload
            }
            return newState;
        default: 
            return state;
    }
}