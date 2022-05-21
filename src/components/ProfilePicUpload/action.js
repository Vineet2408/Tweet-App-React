export const PHOTO_UPLOAD = 'PHOTO_UPLOAD';

import axios from "axios";
import { response } from "spdy";
import { PHOTO_UPLOAD_API } from "../../constants/api";

export const uploadPhoto = (userId, photoData) => function (dispatch) {

    const axiosConfig= {method: 'put', url: PHOTO_UPLOAD_API};

    axios(axiosConfig)
    .then((response) => {
        dispatch({
            type:PHOTO_UPLOAD,
            payload: response.data
        })
    })
    .catch((error) => console.log(error));
}