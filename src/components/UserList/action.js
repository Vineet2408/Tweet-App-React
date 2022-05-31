import axios from 'axios';
import { GET_USER_BY_SEARCH_API, GET_ALL_USERS_API } from '../../constants/api';

export const GET_ALL_USERS = 'GET_ALL_USERS';

export const GET_USER_BY_USERNAME = 'GET_USER_BY_USERNAME';

export const GET_USER_BY_SEARCH = 'GET_USER_BY_SEARCH';

export const getAllUsers = () =>
	function (dispatch) {
        let access_token = localStorage.getItem("token");

		const axiosConfig = {
			method: 'get',
			url: GET_ALL_USERS_API,
            headers: {
				Authorization: `Bearer ${access_token}`,
			},
		};

		axios(axiosConfig)
			.then((response) => {
				console.log(response);

				console.log(response.data);
				dispatch({
					payload: response.data,
					type: GET_ALL_USERS,
				});
			})
			.catch((error) => console.log(error));
	};

export const getUserBySearch = (username) =>
	function (dispatch) {
		let api = `${GET_USER_BY_SEARCH_API}`;
		api = api.substring(0, api.indexOf('username')) + username;
        let access_token = localStorage.getItem("token");
		const axiosConfig = {
			method: 'get',
			url: api,
            headers: {
				Authorization: `Bearer ${access_token}`,
			},
		};

		axios(axiosConfig)
			.then((response) => {
				console.log(response.data);

				dispatch({
					payload: response.data,
					type: GET_USER_BY_SEARCH,
				});
			})
			.catch((error) => console.log(error));
	};
