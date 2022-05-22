import { GET_ALL_TWEETS, GET_ALL_TWEETS_OF_USER } from "./action"

let initialState = [];

export const tweetListReducer = (state = initialState, action) => {
    let list;
    switch(action.type) {
        case GET_ALL_TWEETS:
            list = {...action.payload};
            return list;
        
        case GET_ALL_TWEETS_OF_USER:
            list = {...action.payload};
            return list;

        default: 
            return state;
    }
}