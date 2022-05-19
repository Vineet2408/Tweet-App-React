import React from 'react';
import ProfilePic from '../UI/ProfilePic';

import './profilePicUpload.css';

const ProfilePicUpload = (properties) => {

    const { avatarLink } = properties;

    const [photo, setPhoto] = React.useState();

    const uploadPhotoButtonClickHandler = (event) => {
        event.preventDefault();
        const input = document.getElementById('upload-photo-input');
        input.click();
    }

    const photoChangeHandler = (event) => {
        console.log(event);
    }

    return (
        <div className="photo-upload-wrapper">
            <ProfilePic profilePicSrc={avatarLink} size={128}/>
            <div className="photo-upload-button-wrapper">
                <input
                    className="visually-hidden-object"
                    type="file" onChange={photoChangeHandler}
                    aria-hidden="true"
                    id="upload-photo-input"
                />
                <button className="post-button" type="button" onClick={uploadPhotoButtonClickHandler}>Upload Photo</button>
            </div>
        </div>
    );
};

export default ProfilePicUpload;
