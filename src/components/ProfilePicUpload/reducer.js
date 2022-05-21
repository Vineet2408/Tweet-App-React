
import { PHOTO_UPLOAD } from "./action";

let initialState = {

};

export const photoUploadReducer = (state = initialState, action) => {

    switch(action.type) {
        case PHOTO_UPLOAD:
            let newState =  {
                ...state,
                ...action.payload
            };
           return newState;
        
           default:
               return state;
    }

}