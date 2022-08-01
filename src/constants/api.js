export const apiPrefix = `http://34.201.45.192:8082`;

export const authApiPrefix = `http://3.91.102.70:8081`;
console.log(apiPrefix);
export const ADD_TWEET_API = apiPrefix + '/api/v1.0/tweets/username/add';

export const LOGIN_USER_API = authApiPrefix + '/api/v1.0/tweets/login';

export const REGISTER_USER_API = authApiPrefix + '/api/v1.0/tweets/register';

export const SECURITY_API =
	authApiPrefix + '/api/v1.0/tweets/auth/validate/question';

export const CHANGE_PASSWORD_API =
	authApiPrefix + '/api/v1.0/tweets/auth/changePassword';

export let UPDATE_TWEET_API = apiPrefix + '/api/v1.0/tweets/username/update/id';

export let DELETE_TWEET_API = apiPrefix + '/api/v1.0/tweets/username/delete/id';

export let LIKE_TWEET_API = apiPrefix + '/api/v1.0/tweets/username/like/id';

export let REPLY_TO_TWEET_API =
	apiPrefix + '/api/v1.0/tweets/username/reply/id';

export let GET_REPLIES_OF_TWEET_API = apiPrefix + '/api/v1.0/tweets/replies/id';

export const GET_ALL_TWEETS_API = apiPrefix + '/api/v1.0/tweets/all';

export const GET_ALL_TWEETS_OF_USER_API = apiPrefix + '/api/v1.0/tweets/';

export const GET_ALL_USERS_API = apiPrefix + '/api/v1.0/tweets/users/all';

export const GET_USER_BY_SEARCH_API =
	apiPrefix + '/api/v1.0/tweets/user/search/username';

export const storageApiPrefix = `3.82.108.30:8083`;


export let PHOTO_UPLOAD_API =`http://${storageApiPrefix}/file/update/profilepic/`;
export let PROFILE_PIC_NAME_API = `http://${storageApiPrefix}/file/profilepicName/`;

export let DOWNLOAD_PROFILE_PIC_API = `http://${storageApiPrefix}/file/download/`;