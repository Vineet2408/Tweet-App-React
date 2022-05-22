import { UPDATE_TWEET, DELETE_TWEET, LIKE_TWEET, REPLY_TO_TWEET, GET_REPLIES_OF_TWEET } from "./action";



let initialState = {};

export const tweetReducer = (state = initialState, action) => {

    let newState;
    switch(action.type) {

        case UPDATE_TWEET:
            newState = {
                ...state,
                ...action.payload
            }
            return newState;
        
        case DELETE_TWEET:
            newState = {
                ...state,
                ...action.payload
            }
            return newState;
        case LIKE_TWEET:
            newState = {
                ...state,
                ...action.payload
            }
            return newState;
        
        case LIKE_TWEET:
            newState = {
                ...state,
                ...action.payload
            }
            return newState;
        default:
            return state;
    }
}

export const repliesOfAllTweetReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_REPLIES_OF_TWEET:
            let newState = {
                ...state,
                ...action.payload
            }
            return newState;
        
        default:
            return state;
    }
}