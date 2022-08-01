import { LOGIN_USER, LOGOUT_USER } from './action';
import {PHOTO_UPLOAD} from '../ProfilePicUpload/action';

let initialState = {
	token: null,
	userId: null,
	isUserLoggedIn: false,
	username: null,
	avatarLink: '',
};

export const loginReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case LOGIN_USER:
			newState = {
				...state,
				...action.payload,
				isUserLoggedIn: true,
			};
			localStorage.setItem('token', newState.token);
			localStorage.setItem('userId', newState.userId);
			localStorage.setItem('isUserLoggedIn', true);
            localStorage.setItem('username',newState.username);
			return newState;

		case LOGOUT_USER:
			newState = {
				...action.payload,
				...initialState,
			};
			localStorage.removeItem('token');
			localStorage.removeItem('userId');
			localStorage.removeItem('isUserLoggedIn');
            localStorage.removeItem('username');
			return newState;
		
		case PHOTO_UPLOAD: 
			newState = {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
