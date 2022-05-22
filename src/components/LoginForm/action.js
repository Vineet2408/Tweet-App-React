import axios from "axios";
import { LOGIN_USER_API } from "../../constants/api";


export const LOGIN_USER = 'LOGIN_USER';

export const LOGOUT_USER = 'LOGOUT_USER';


export const loginUser = (userCreds) => function (dispatch) {

    const axiosConfig = {
        data:userCreds,
        method: 'post',
        url: LOGIN_USER_API
    }

    axios(axiosConfig)
    .then((response) => {
        console.log(response.data);
        dispatch({
            payload:response.data,
            type: LOGIN_USER
        })
    })
    .catch((error) => console.log(error));
}

export const logoutUser = (userId) => function(dispatch) {
    dispatch({
        type:LOGOUT_USER,
        payload: {
            token:null,
            userId:null
        }
    });
}