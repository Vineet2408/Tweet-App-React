export const ADD_TWEET = 'ADD_TWEET';

import axios from "axios";
import { ADD_TWEET_API } from "../../constants/api";
export const addTweet = (tweetData) => function (dispatch) {

    const axiosConfig = {
        data:tweetData,
        method: 'post',
        url: ADD_TWEET_API

    }

    axios(axiosConfig).then((response) => {
        dispatch({
            type:ADD_TWEET,
            payload: response.data,
        });
    }).catch((error) => console.log(error));

};

