import { GET_ALL_TWEETS, GET_ALL_TWEETS_OF_USER } from "./action"

let initialState = [];

export const tweetListReducer = (state = initialState, action) => {

    switch(action.type) {
        case GET_ALL_TWEETS:
            let list = action.payload;
            return list;
            break;
        
        case GET_ALL_TWEETS_OF_USER:
            let list = action.payload;
            return list;
            break;

        default: 
            return initialState;
    }
}