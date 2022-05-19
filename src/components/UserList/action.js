import axios from "axios";

export const GET_ALL_USERS = 'GET_ALL_USERS';

export const GET_USER_BY_USERNAME = 'GET_USER_BY_USERNAME';



export const getAllUsers = () => function (dispatch) {
    const axiosConfig = {
        method: 'get',
        url: GET_ALL_USERS_API
    };

    axios(axiosConfig)
    .then((response) => {
        dispatch({
            payload: response.data,
            type: GET_ALL_USERS
        });
    })
    .catch((error) => console.log(error));
}

export const getUserByUsername = (username) => function (dispatch) {
    const axiosConfig = {
        method: 'get',
        url: GET_USER_BY_USERNAME_API+username
    };

    axios(axiosConfig).then((response) => {
        dispatch({
            payload: response.data,
            type: GET_USER_BY_USERNAME
        });
    }).catch((error) => console.log(error));
}