import { combineReducers } from "redux";

import { loginReducer } from "../components/LoginForm/reducer";

import { addTweetReducer } from "../components/AddTweet/reducer";
import { photoUploadReducer } from "../components/ProfilePicUpload/reducer";

import { registerUserReducer } from "../components/RegisterForm/reducer";
import { tweetReducer } from "../components/Tweet/reducer";
import { repliesOfAllTweetReducer } from "../components/Tweet/reducer";
import { tweetListReducer } from "../components/TweetList/reducer";
import { userListReducer } from "../components/UserList/reducer";
import { userReducer } from "../components/UserList/reducer";

const rootReducer = combineReducers({
    loginReducer,
    addTweetReducer,
    photoUploadReducer,
    registerUserReducer,
    tweetListReducer,
    tweetReducer,
    repliesOfAllTweetReducer,
    userListReducer,
    userReducer,
});

export default rootReducer;