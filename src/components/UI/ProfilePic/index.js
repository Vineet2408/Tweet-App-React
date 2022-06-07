import React from 'react';
import { profilePicSize } from '../../../constants/sizes';

import avatar from '../../../images/avatar.jpg';

import profileIcon from '../../../images/ProfileIcon.svg';

import './profilePic.css';

const ProfilePic = (properties) => {

    let isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    const { profilePicSrc, size } = properties;

    const className = profilePicSize[size];

    return (
        <div className={`profile-pic-wrapper ${className}`} >
            <img alt="Profile Pic" className="profile-pic" src={isUserLoggedIn?avatar:profileIcon}></img>
        </div>
    );
};

export default ProfilePic;
