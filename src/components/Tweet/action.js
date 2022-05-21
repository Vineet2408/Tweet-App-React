import axios from "axios";
import { UPDATE_TWEET_API, DELETE_TWEET_API, LIKE_TWEET_API, REPLY_TO_TWEET_API, GET_REPLIES_OF_TWEET_API} from "../../constants/api";

export const UPDATE_TWEET = 'UPDATE_TWEET';

export const DELETE_TWEET = 'DELETE_TWEET';

export const LIKE_TWEET = 'LIKE_TWEET';

export const REPLY_TO_TWEET = 'REPLY_TO_TWEET';

export const GET_REPLIES_OF_TWEET = 'GET_REPLIES_OF_TWEET';



export const updateTweetByUsername = (username,id,tweetData) => function (dispatch) {
    
    let api = `${UPDATE_TWEET_API}`;
    UPDATE_TWEET_API.replace('username',username);
    UPDATE_TWEET_API.replace('id',id);
    const axiosConfig = {
        data: tweetData,
        method: 'put',
        url: UPDATE_TWEET_API
    };

    axios(axiosConfig)
    .then((reponse) => {
        dispatch({ payload:reponse.data,type: UPDATE_TWEET})
    })
    .catch((error) => console.log(error));
}


export const deleteTweetByUsername = (username,id) => function (dispatch) {
    
    DELETE_TWEET_API.replace('username',username);
    DELETE_TWEET_API.replace('id',id);
    const axiosConfig = {
        method: 'delete',
        url: DELETE_TWEET_API
    };

    axios(axiosConfig)
    .then((reponse) => {
        dispatch({ payload:reponse.data,type: DELETE_TWEET})
    })
    .catch((error) => console.log(error));
}

export const likeTweetByUsername = (username,id) => function (dispatch) {
    
    LIKE_TWEET_API.replace('username',username);
    LIKE_TWEET_API.replace('id',id);
    const axiosConfig = {
        method: 'put',
        url: LIKE_TWEET_API
    };

    axios(axiosConfig)
    .then((reponse) => {
        dispatch({ payload:reponse.data,type: LIKE_TWEET})
    })
    .catch((error) => console.log(error));
}


export const replyTweetByUsername = (username,id,tweetData) => function (dispatch) {
    
    REPLY_TO_TWEET_API.replace('username',username);
    REPLY_TO_TWEET_API.replace('id',id);
    const axiosConfig = {
        data: tweetData,
        method: 'post',
        url: REPLY_TO_TWEET_API
    };

    axios(axiosConfig)
    .then((reponse) => {
        dispatch({ payload:reponse.data,type: REPLY_TO_TWEET})
    })
    .catch((error) => console.log(error));
}

export const getAllRepliesOfTweet = (username, id) => function(dispatch) {
    GET_REPLIES_OF_TWEET_API.replace('username',username);
    GET_REPLIES_OF_TWEET_API.replace('id',id);
    const axiosConfig = {
        method: 'get',
        url: GET_REPLIES_OF_TWEET_API
    };

    axios(axiosConfig)
    .then((reponse) => {
        dispatch({ payload:reponse.data,type: GET_REPLIES_OF_TWEET})
    })
    .catch((error) => console.log(error));
}