import axios from "axios";
import { UPDATE_TWEET_API, DELETE_TWEET_API, LIKE_TWEET_API, REPLY_TO_TWEET_API, GET_REPLIES_OF_TWEET_API} from "../../constants/api";

export const UPDATE_TWEET = 'UPDATE_TWEET';

export const DELETE_TWEET = 'DELETE_TWEET';

export const LIKE_TWEET = 'LIKE_TWEET';

export const REPLY_TO_TWEET = 'REPLY_TO_TWEET';

export const GET_REPLIES_OF_TWEET = 'GET_REPLIES_OF_TWEET';


export const REPLY_LIKE = "REPLY_LIKE";

export const REPLY_UPDATE = "REPLY_UPDATE";

export const REPLY_DELETE = "REPLY_DELETE";


export const updateTweetByUsername = (username,id,tweetData) => function (dispatch) {
    
    let access_token = localStorage.getItem("token");
    let api = `${UPDATE_TWEET_API}`;
    api = api.substring(0,api.indexOf('username'))+username+"/update/"+id;
    console.log(api);
    console.log('username = ',username, " id = ",id);

    const axiosConfig = {
        data: tweetData,
        method: 'put',
        url: api,
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    };

    axios(axiosConfig)
    .then((response) => {
        if (response.data.repliedTo !== null) {
            let newData = {};
            let newArr = [];
            newArr.push(response.data);
            newData[response.data.repliedTo] = newArr;
            dispatch({ payload:newData,type: REPLY_UPDATE});
        }
        else {
            dispatch({ payload:response.data,type: UPDATE_TWEET});
        }
    })
    .catch((error) => console.log(error));
}


export const deleteTweetByUsername = (username,id,tweet) => function (dispatch) {
    let access_token = localStorage.getItem("token");

    console.log('username = ',username, " id = ",id);
    let api = `${DELETE_TWEET_API}`;
    api = api.substring(0,api.indexOf('username'))+username+"/delete/"+id;
    console.log('api = ',api);
    const axiosConfig = {
        method: 'delete',
        url: api,
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    };

    axios(axiosConfig)
    .then((response) => {
        if (response.data ) {
            console.log(response.data);
            if (tweet.repliedTo !== null) {

                let newData = {};
                let newArr = [];
                newArr.push(tweet);
                newData[tweet.repliedTo] = newArr;

                dispatch({ payload:newData,type: REPLY_DELETE});
            }
            else {
                dispatch({ payload:tweet,type: DELETE_TWEET});
            }
        }
    })
    .catch((error) => console.log(error));
}

export const likeTweetByUsername = (username,id) => function (dispatch) {
    let access_token = localStorage.getItem("token");

    let api = `${LIKE_TWEET_API}`;
    api = api.substring(0,api.indexOf('username'))+username+"/like/"+id;

    console.log('username = ',username, " id = ",id);

    const axiosConfig = {
        method: 'put',
        url: api,
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    };

    axios(axiosConfig)
    .then((response) => {
        console.log(response.data);
        if (response.data.repliedTo !== null) {
            let newData = {};
            let newArr = [];
            newArr.push(response.data);
            newData[response.data.repliedTo] = newArr;
            dispatch({ 
                payload:newData,
                type: REPLY_LIKE});
        }
        else {
            dispatch({ 
                payload:response.data,
                type: LIKE_TWEET});
        }
        
    })
    .catch((error) => console.log(error));
}


export const replyTweetByUsername = (username,id,tweetData) => function (dispatch) {
    let access_token = localStorage.getItem("token");

    let api = `${REPLY_TO_TWEET_API}`;
    api = api.substring(0,api.indexOf('username'))+username+"/reply/"+id;
    console.log('username = ',username, " id = ",id);

    const axiosConfig = {
        data: tweetData,
        method: 'post',
        url: api,
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
    };

    axios(axiosConfig)
    .then((response) => {
        let newData = {};
        let newArrOfReplies = [];
        newArrOfReplies.push(response.data);
        newData[id] = newArrOfReplies;
        dispatch({ payload:newData,type: REPLY_TO_TWEET})
    })
    .catch((error) => console.log(error));
}

export const getAllRepliesOfTweet = (username, id) => function(dispatch) {
    let access_token = localStorage.getItem("token");

    let api = `${GET_REPLIES_OF_TWEET_API}`;
    api = api.substring(0,api.indexOf('id'))+id;
    console.log('username = ',username, " id = ",id);

    const axiosConfig = {
        method: 'get',
        url: api,
        headers:{
            Authorization: `Bearer ${access_token}`,
        }
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