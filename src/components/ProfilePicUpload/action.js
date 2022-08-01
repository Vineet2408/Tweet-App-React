
import axios from "axios";
import { PHOTO_UPLOAD_API, PROFILE_PIC_NAME_API,  DOWNLOAD_PROFILE_PIC_API} from "../../constants/api";

export const PHOTO_UPLOAD = 'PHOTO_UPLOAD';
export const UPDATE_USERNAME_AND_PROFILEPIC_NAME = "UPDATE_USERNAME";
export const DOWNLOAD_PROFILE_PIC = "DOWNLOAD_PROFILE_PIC"; 
export const uploadPhoto = (username, imageData, setters) =>async  function (dispatch) {

    let response;
        try {
            response= await axios.post(`${PHOTO_UPLOAD_API}${username}`,
            imageData,{
                onUploadProgress: progressEvent=>{
                    setTimeout(() => {
                        setters.setProgressWidth((progressEvent.loaded *100/progressEvent.total).toString()+"%");
                    }, 1000);
                }
            }
            );
            console.log('response = ', response);
            dispatch({
                type:PHOTO_UPLOAD,
                payload: {avatarLink:DOWNLOAD_PROFILE_PIC_API+response.data.avatarLink}
            });
                setters.setButtons(false);
                setTimeout(() => {
                    
                    setters.setProgressWidth("0px");
                }, 2000);
            
        }
        catch(e) {
            console.log(e);
        }
       
   
}

export const getProfilePicName = (username)=> function (dispatch) {
    const axiosConfig = {method: 'get', url: PROFILE_PIC_NAME_API+username};
    axios(axiosConfig).then((response) => {
        dispatch(
            {
                type: UPDATE_USERNAME_AND_PROFILEPIC_NAME, 
                payload:{
                    username,
                    profilePicName: response.data
                }
            });
    })
    .catch((e)=>console.log(e));
}
