import React from 'react';
import { profilePicSize } from '../../../constants/sizes';

import avatar from '../../../images/default-user.png'

import './profilePic.css';

const ProfilePic = (properties) => {

    const { profilePicSrc, size } = properties;

    const className = profilePicSize[size];

    return (
        <div className={`profile-pic-wrapper ${className}`} >
            <img alt="Profile Pic" className="profile-pic" src={profilePicSrc || avatar}></img>
        </div>
    );
};

export default ProfilePic;
