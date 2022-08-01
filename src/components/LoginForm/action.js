import axios from "axios";
import { LOGIN_USER_API, PROFILE_PIC_NAME_API, DOWNLOAD_PROFILE_PIC_API } from "../../constants/api";


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
                axios({
                    method: 'get',
                    url: PROFILE_PIC_NAME_API + response.data.username,
                }).then((responsePic) => {
                    dispatch({
                        payload:{
                            token:response.data.access_token,
                            userId:response.data.email,
                            isUserLoggedIn:true,
                            username:response.data.username,
                            avatarLink: DOWNLOAD_PROFILE_PIC_API+responsePic.data,
                        },
                        type: LOGIN_USER
                    });
                })
                .catch((error) => {
                    console.log(error);
                })
                
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

export const  getProfilePicName = async (username) => {
    return await axios({
        method: 'get',
        url: PROFILE_PIC_NAME_API + username,
    });
}

export const setUserDetails = () => function (dispatch) {
    axios({
        method: 'get',
        url: PROFILE_PIC_NAME_API + localStorage.getItem("username"),
    }).then((response) => {
        let username = localStorage.getItem("username");
        let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
        let token = localStorage.getItem("token");
        let userId = localStorage.getItem("userId");
        dispatch({
            payload:{
                token:token,
                userId:userId,
                isUserLoggedIn:true,
                username:username,
                avatarLink: DOWNLOAD_PROFILE_PIC_API+response.data,
            },
            type: LOGIN_USER
        });
    })
}
