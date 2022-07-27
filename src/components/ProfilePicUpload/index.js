import React from 'react';
import ProfilePic from '../UI/ProfilePic';
import ProgressBar from '../ProgressBar';
import './profilePicUpload.css';
import axios from 'axios';

import {uploadPhoto} from './action';

import { useSelector, useDispatch } from 'react-redux';

function selector(state) {
    return state.loginReducer;
}

function photoSelector(state) {
    return state.photoUploadReducer;
}
export const convertToBase64 = (photoFile) => {
  console.log('Inside converter , photofile = ', photoFile);

  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(photoFile);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};


const ProfilePicUpload = (properties) => {

    const loginState = useSelector(selector)
    const photoUploadState = useSelector(photoSelector);

    const dispatch = useDispatch();

    React.useEffect(()=> {}, [loginState,photoUploadState]);

    let  avatarLink = photoUploadState.avatarLink || properties.avatarLink;

    const [buttons, setButtons] = React.useState(false);

    const [progressWidth, setProgressWidth] = React.useState("0px");

    const [photo, setPhoto] = React.useState();

    const [preview, setPreview] = React.useState();
  
    let username = localStorage.getItem("username");
    let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");

   
    const selectPhotoButtonClickHandler = (event) => {
        event.preventDefault();
        const input = document.getElementById('upload-photo-input');
        input.click();
    }

    const cancelPhotoButtonClickHandler = (event) => {
        event.preventDefault();
        setPreview(undefined);
        setButtons(false);
    }

    const photoChangeHandler = (event) => {
        console.log(event);
        console.log(" photo = ",event.target.files[0]);
        let photoFile = event.target.files[0];
        setPhoto(photoFile);
        setButtons(true);
        convertToBase64(photoFile)
        .then((imagePreview)=>setPreview(imagePreview))
        .catch(error=>console.log(error));

    }

    const uploadPhotoButtonClickHandler = async (event)=> {
        event.preventDefault();
        const imageData = new FormData();
        imageData.append("imageData",photo);
        let response;
        let setters = {
            setProgressWidth,
            setButtons,
        }
        // try {
        //     response= await axios.post(`http://localhost:8083/file/update/profilepic/${username}`,
        // imageData,{
        //     onUploadProgress: progressEvent=>{
        //         setTimeout(() => {
        //             setProgressWidth((progressEvent.loaded *100/progressEvent.total).toString()+"%");
        //         }, 1000);
        //     }
        // }
        // );
        // console.log('response = ', response);
        // }
        // catch(e) {
        //     console.log(e);
        // }
        // if (response.data.status === "200" && response.data.avatarLink !== "") {
        //     setButtons(false);
        //     setTimeout(() => {
                
        //         setProgressWidth("0px");
        //     }, 2000);
        // }
        dispatch(uploadPhoto(username,imageData,setters));
    }

    return (
        <div className="photo-upload-wrapper">
            <ProfilePic profilePicSrc={buttons? preview: avatarLink} size={128}/>
            {
                buttons &&
                <p style={{ fontWeight: "700" }}>Preview</p>
            }
            <h1 className="text-underline">{username}</h1>
            <div className="photo-upload-button-wrapper">
                <input
                    accept="image/*"
                    className="visually-hidden-object"
                    type="file" onChange={photoChangeHandler}
                    aria-hidden="true"
                    id="upload-photo-input"
                />
                {/* {isUserLoggedIn && */}{ !buttons &&

                    <button className="put-button" type="button" onClick={selectPhotoButtonClickHandler}>Select Photo</button>
                }
                { buttons &&
                    <div className="col clgp-16 justify-center">
                        <div style={{ display:  "flex", flexDirection: "row", columnGap: "16px" }}>
                            <button className="put-button" type="button" onClick={selectPhotoButtonClickHandler}>Change Photo</button>

                            <button className="post-button" type="button" onClick={uploadPhotoButtonClickHandler}>Upload Photo</button>
                        </div>
                        <div className="justify-center">
                            <button className="delete-button" type="button" onClick={cancelPhotoButtonClickHandler}>Cancel</button>
                        </div>
                    </div>
                }
            </div>
            {Number(progressWidth.substring(0,1)) > 1 &&
                <ProgressBar width={progressWidth}></ProgressBar>
            }
        </div>
    );
};

export default ProfilePicUpload;
