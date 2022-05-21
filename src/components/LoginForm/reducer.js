let initialState = {
    token:null,
    userId:null,
};

import { LOGIN_USER, LOGOUT_USER } from "./action"

export const loginReducer = (state =initialState, action) => {

    switch(action.type) {

        case LOGIN_USER:
            let newState = {
                ...state,
                ...action.payload,
                isUserLoggedIn: true
            };
            localStorage.setItem('token', newState.token);
            localStorage.setItem('userId',newState.userId);
            localStorage.setItem('isUserLoggedIn', true);
            return newState;

        case LOGOUT_USER:
            let newState = {
                ...action.payload,
                ...initialState
            }
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('isUserLoggedIn');
            return newState;
    }
}