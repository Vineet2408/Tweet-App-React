import { combineReducers } from "redux";

import { loginReducer } from "../components/LoginForm/reducer";

import { photoUploadReducer } from "../components/ProfilePicUpload/reducer";

import { registerUserReducer } from "../components/RegisterForm/reducer";
import { repliesOfAllTweetReducer } from "../components/Tweet/reducer";
import { tweetListReducer } from "../components/TweetList/reducer";
import { userListReducer } from "../components/UserList/reducer";
import { userReducer } from "../components/UserList/reducer";

const rootReducer = combineReducers({
    loginReducer,
    photoUploadReducer,
    registerUserReducer,
    tweetListReducer,
    repliesOfAllTweetReducer,
    userListReducer,
    userReducer,
});

export default rootReducer;