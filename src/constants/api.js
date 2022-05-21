export const ADD_TWEET_API = '';

export const apiPrefix = `${process.env.REACT_APP_HOST}`;
console.log(apiPrefix);

export const LOGIN_USER_API = apiPrefix+'/api/v1.0/tweets/login';

export const REGISTER_USER_API = apiPrefix+'/api/v1.0/tweets/register';


export let UPDATE_TWEET_API = apiPrefix+'/api/v1.0/tweets/username/update/id';

export let DELETE_TWEET_API = apiPrefix+'/api/v1.0/tweets/username/delete/id';

export let LIKE_TWEET_API = apiPrefix+'/api/v1.0/tweets/username/like/id';

export let REPLY_TO_TWEET_API = apiPrefix+'/api/v1.0/tweets/username/reply/id';

export let GET_REPLIES_OF_TWEET_API = apiPrefix+'/';

export const GET_ALL_TWEETS_API = apiPrefix+'/api/v1.0/tweets/all';

export const GET_ALL_TWEETS_OF_USER_API = apiPrefix+'/api/v1.0/tweets/';


export const GET_ALL_USERS_API = apiPrefix+'/api/v1.0/tweets/users/all';

export const GET_USER_BY_USERNAME_API = apiPrefix+'/api/v/1.0/tweets/user/search/';

export const PHOTO_UPLOAD_API = apiPrefix+'/';