import { GET_ALL_TWEETS, GET_ALL_TWEETS_OF_USER } from "./action"

import {DELETE_TWEET, UPDATE_TWEET, LIKE_TWEET} from '../Tweet/action';

import {ADD_TWEET} from '../AddTweet/action';
let initialState = [];

export const tweetListReducer = (state = initialState, action) => {
    let list;
    switch(action.type) {
        case GET_ALL_TWEETS:
            list = [...action.payload];
            return list;
        
        case GET_ALL_TWEETS_OF_USER:
            list = [...action.payload];
            return list;

        case ADD_TWEET: 
        // list = [...state];
        list = [];
        list.push(action.payload);
        for (let i = 0; i < state.length; i++) {
            const element = state[i];
            list.push(element);
        }
        console.log("after add = ",list);
        return list;
        
        case UPDATE_TWEET:
            list = state.filter((tweet)=> tweet.id !== action.payload.id);
            list.push(action.payload);
            list.sort((tweet1, tweet2)=> tweet1.tweetedAt > tweet2.tweetedAt);
            return list;
        
        case DELETE_TWEET:
            console.log('action.payload = m',action.payload);
            list = state.filter((tweet) => tweet.id !== action.payload.id);
            console.log("after delete = ",list);
            return list;
        
        case LIKE_TWEET:
            console.log('action.payload = l',action.payload);
            list = state.filter((tweet)=> tweet.id !== action.payload.id);
            list.push(action.payload);
            list.sort((tweet1, tweet2)=> tweet1.tweetedAt < tweet2.tweetedAt);
            console.log("after like = ",list);

            return list;
        default: 
            return state;
    }
}