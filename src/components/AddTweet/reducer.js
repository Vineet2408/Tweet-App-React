
import { ADD_TWEET } from "./action"

let initialState = {};

export const addTweetReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TWEET: 
            return {
                ...state,
                ...action.payload
            }
        default: 
            return state;
    }
}