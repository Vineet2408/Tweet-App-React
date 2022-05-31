import axios from "axios";
import { LOGIN_USER_API } from "../../constants/api";


export const LOGIN_USER = 'LOGIN_USER';

export const LOGOUT_USER = 'LOGOUT_USER';


export const loginUser = (userCreds, setLoginFailed) => function (dispatch) {

    const axiosConfig = {
        data:userCreds,
        method: 'post',
        url: LOGIN_USER_API
    }

    axios(axiosConfig)
    .then((response) => {
        console.log(response.data);
        if(response.data.username !== undefined && response.data.username !== null) {
            let access_token = response.data.access_token;
            if (access_token !== undefined && access_token !== null) {
                dispatch({
                    payload:{
                        token:response.data.access_token,
                        userId:response.data.email,
                        isUserLoggedIn:true,
                        username:response.data.username
                    },
                    type: LOGIN_USER
                });
            }
            else {
                setLoginFailed(true);
            }
        }
        else {
            setLoginFailed(true);
            console.log('login failed');
        }
    })
    .catch((error) => {setLoginFailed(true);console.log(error)});
}

export const logoutUser = () => function(dispatch) {
    dispatch({
        type:LOGOUT_USER,
        payload: {
            token:null,
            userId:null,
            isUserLoggedIn:false,
            username:null
        }
    });
}