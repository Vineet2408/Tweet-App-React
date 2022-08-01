import React from 'react';
import { profilePicSize } from '../../../constants/sizes';

import avatar from '../../../images/avatar.jpg';

import profileIcon from '../../../images/ProfileIcon.svg';

import './profilePic.css';

import { DOWNLOAD_PROFILE_PIC_API } from '../../../constants/api';

const ProfilePic = (properties) => {

    let isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    const { profilePicSrc, size } = properties;
    
    const className = profilePicSize[size];
    
    let src = (DOWNLOAD_PROFILE_PIC_API === profilePicSrc) ? avatar : profilePicSrc;

    return (
        <div className={`profile-pic-wrapper ${className}`} >
            <img alt="Profile Pic" className="profile-pic" src={isUserLoggedIn?src:profileIcon}></img>
        </div>
    );
};

export default ProfilePic;
