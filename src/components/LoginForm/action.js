export const LOGIN_USER = 'LOGIN_USER';


export const loginUser = (userCreds) => function (dispatch) {

    const axiosConfig = {
        method: 'post',
        url: LOGIN_USER_API
    }

    axios(axiosConfig)
    .then((response) => {
        dispatch({
            payload:response.data,
            type: LOGIN_USER
        })
    })
    .catch((error) => console.log(error));
}