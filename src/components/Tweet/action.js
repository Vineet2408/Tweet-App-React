import axios from "axios";
import { UPDATE_TWEET_API, DELETE_TWEET_API, LIKE_TWEET_API, REPLY_TO_TWEET_API, GET_REPLIES_OF_TWEET_API} from "../../constants/api";

export const UPDATE_TWEET = 'UPDATE_TWEET';

export const DELETE_TWEET = 'DELETE_TWEET';

export const LIKE_TWEET = 'LIKE_TWEET';

export const REPLY_TO_TWEET = 'REPLY_TO_TWEET';

export const GET_REPLIES_OF_TWEET = 'GET_REPLIES_OF_TWEET';



export const updateTweetByUsername = (username,id,tweetData) => function (dispatch) {
    
    let api = `${UPDATE_TWEET_API}`;
    api = api.substring(0,api.indexOf('username'))+username+"/update/"+id;
    console.log(api);
    console.log('username = ',username, " id = ",id);
    const axiosConfig = {
        data: tweetData,
        method: 'put',
        url: api
    };

    axios(axiosConfig)
    .then((reponse) => {
        dispatch({ payload:reponse.data,type: UPDATE_TWEET})
    })
    .catch((error) => console.log(error));
}


export const deleteTweetByUsername = (username,id,tweet) => function (dispatch) {

    console.log('username = ',username, " id = ",id);
    let api = `${DELETE_TWEET_API}`;
    api = api.substring(0,api.indexOf('username'))+username+"/delete/"+id;
    console.log('api = ',api);
    const axiosConfig = {
        method: 'delete',
        url: api
    };

    axios(axiosConfig)
    .then((reponse) => {
        if (reponse.data ) {

            dispatch({ payload:tweet,type: DELETE_TWEET});
        }
    })
    .catch((error) => console.log(error));
}

export const likeTweetByUsername = (username,id) => function (dispatch) {
    let api = `${LIKE_TWEET_API}`;
    api = api.substring(0,api.indexOf('username'))+username+"/like/"+id;

    console.log('username = ',username, " id = ",id);

    const axiosConfig = {
        method: 'put',
        url: api
    };

    axios(axiosConfig)
    .then((reponse) => {
        console.log(reponse.data);
        dispatch({ 
            payload:reponse.data,
            type: LIKE_TWEET})
    })
    .catch((error) => console.log(error));
}


export const replyTweetByUsername = (username,id,tweetData) => function (dispatch) {
    let api = `${REPLY_TO_TWEET_API}`;
    api = api.substring(0,api.indexOf('username'))+username+"/reply/"+id;
    console.log('username = ',username, " id = ",id);

    const axiosConfig = {
        data: tweetData,
        method: 'post',
        url: api
    };

    axios(axiosConfig)
    .then((reponse) => {
        dispatch({ payload:reponse.data,type: REPLY_TO_TWEET})
    })
    .catch((error) => console.log(error));
}

export const getAllRepliesOfTweet = (username, id) => function(dispatch) {

    let api = `${GET_REPLIES_OF_TWEET_API}`;
    api = api.substring(0,api.indexOf('id'))+id;
    console.log('username = ',username, " id = ",id);

    const axiosConfig = {
        method: 'get',
        url: api
    };

    axios(axiosConfig)
    .then((response) => {
        let newData = {};
        newData[id] = response.data;
        console.log(newData);
        console.log(newData[id]);
        dispatch({ payload:newData,type: GET_REPLIES_OF_TWEET})
    })
    .catch((error) => console.log(error));
}