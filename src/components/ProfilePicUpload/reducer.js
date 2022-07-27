
import { PHOTO_UPLOAD, UPDATE_USERNAME_AND_PROFILEPIC_NAME } from "./action";

let initialState = {
    username:undefined,
    photo:undefined,
    avatarLink:undefined
};

export const photoUploadReducer = (state = initialState, action) => {

    switch(action.type) {
        case PHOTO_UPLOAD:
            let newState =  {
                ...state,
                ...action.payload,
                username:localStorage.getItem("username")
            };
           return newState;
        case UPDATE_USERNAME_AND_PROFILEPIC_NAME: 
            let ns = {
                ...state,
                ...action.payload,
                username:localStorage.getItem("username")
            }
        
           default:
               return state;
    }

}