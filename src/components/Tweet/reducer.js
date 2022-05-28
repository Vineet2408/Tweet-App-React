import { UPDATE_TWEET, DELETE_TWEET, LIKE_TWEET, REPLY_TO_TWEET, GET_REPLIES_OF_TWEET } from "./action";

import {REPLY_DELETE, REPLY_LIKE, REPLY_UPDATE} from './action';

let initialState = {};

let listInitialState = {};
export const repliesOfAllTweetReducer = (state = listInitialState, action) => {

    let newState;
    let mainTweetId;
    let arr;
    let list;
    switch(action.type) {
        case GET_REPLIES_OF_TWEET:
             newState = {
                ...state,
                ...action.payload
            }
            return newState;
        case REPLY_TO_TWEET:
            
            mainTweetId = Object.keys(action.payload)[0];

            arr = state[mainTweetId];
            list = [...arr];
            list.push(...action.payload[mainTweetId]);
            console.log('list = ', list);
            newState = {...state};
            newState[mainTweetId] = list;
            console.log('newState = ', newState);

            return newState;

        case REPLY_UPDATE:
        case REPLY_LIKE:
            console.log('inside reducer = ', action.payload);
            mainTweetId = Object.keys(action.payload)[0];
            arr = state[mainTweetId];
            console.log('mainTweetId = ',mainTweetId);
            console.log('state = ',state);
            console.log('arr = ',arr);
            list = [];
            let updatedTweet = action.payload[mainTweetId][0];
            console.log('updatedTweet = ',updatedTweet)
            arr.forEach((tweet, index) => {
                if(tweet.id !== updatedTweet.id)
                    list.push(tweet);
                else
                    list.push(updatedTweet);
            })
            newState = {...state};
            newState[mainTweetId] = list;
        
            return newState;

        case REPLY_DELETE:

            mainTweetId = Object.keys(action.payload)[0];
           
            arr = state[mainTweetId];
            list = [];
            let deletedTweet = action.payload[mainTweetId][0];
            arr.forEach((tweet, index) => {
                if(tweet.id !== deletedTweet.id)
                    list.push(tweet);
            })
            newState = {...state};
            newState[mainTweetId] = list;
        
            return newState;
        
        default:
            return state;
    }
}