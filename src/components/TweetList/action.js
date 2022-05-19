import axios from "axios";

export const GET_ALL_TWEETS = 'GET_ALL_TWEETS';

export const GET_ALL_TWEETS_OF_USER = 'GET_ALL_TWEETS_OF_USER';



export const getAllTweets = () => function(dispatch) {

    const axiosConfig = {
        method: 'get',
        url: GET_ALL_TWEETS_API,
    }
    axios(axiosConfig)
    .then((response) => {
        dispatch({
            payload: response.data,
            type: GET_ALL_TWEETS
        });
    })
    .catch((error) => console.log(error))
}

export const getAllTweetsOfUser = (user) => function (dispatch) {

    const axiosConfig = {
        method: 'get',
        url: GET_ALL_TWEETS_OF_USER_API+user.username
    }

    axios(axiosConfig)
    .then((response) => {
        dispatch({
            payload: response.data,
            type: GET_ALL_TWEETS_OF_USER
        });
    })
    .catch((error) => console.log(error))
}
