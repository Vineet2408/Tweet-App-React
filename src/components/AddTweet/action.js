
import axios from "axios";
import { ADD_TWEET_API } from "../../constants/api";

export const ADD_TWEET = 'ADD_TWEET';

export const addTweet = (tweetData) => function (dispatch) {
    let access_token = localStorage.getItem("token");

    let username = localStorage.getItem('username');
    let api = `${ADD_TWEET_API}`;
    api = api.substring(0,api.indexOf('username'))+username+"/add";
    console.log(api);
    console.log('username = ',username);
    const axiosConfig = {
        data:tweetData,
        method: 'post',
        url: api,
        headers: {
            Authorization: `Bearer ${access_token}`,
        }

    }

    axios(axiosConfig).then((response) => {
        console.log(response.data);
        dispatch({
            type:ADD_TWEET,
            payload: response.data,
        });
    }).catch((error) => console.log(error));

};

