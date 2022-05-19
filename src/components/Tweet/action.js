import axios from "axios";

export const UPDATE_TWEET = 'UPDATE_TWEET';

export const DELETE_TWEET = 'DELETE_TWEET';

export const LIKE_TWEET = 'LIKE_TWEET';

export const REPLY_TO_TWEET = 'REPLY_TO_TWEET';




export const updateTweetByUsername = (username,id) => function (dispatch) {
    
    UPDATE_TWEET_API.replace('username',username);
    UPDATE_TWEET_API.replace('id',id);
    const axiosConfig = {
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


export const replyTweetByUsername = (username,id) => function (dispatch) {
    
    REPLY_TWEET_API.replace('username',username);
    REPLY_TWEET_API.replace('id',id);
    const axiosConfig = {
        method: 'post',
        url: REPLY_TWEET_API
    };

    axios(axiosConfig)
    .then((reponse) => {
        dispatch({ payload:reponse.data,type: REPLY_TWEET})
    })
    .catch((error) => console.log(error));
}