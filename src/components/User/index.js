import React from 'react';
import ProfilePic from '../UI/ProfilePic';

import './user.css';

import { DOWNLOAD_PROFILE_PIC_API } from '../../constants/api';

const User = (properties) => {
	const { user } = properties;
	return (
		<div className="user-wrapper">
			<div className="row rowgp-16">
				<div className="d-flex">
					<ProfilePic profilePicSrc={DOWNLOAD_PROFILE_PIC_API+user.avatarLink} size={32}/>
				</div>
				<div className="col clgp-8" style={{flex:'1'}}>
					<p className="tweet-username">{user.firstName}{" "}{user.lastName}</p>
					<div className="row space-between">
						<p className="tweet-tweetedTo"><i>@{user.username}</i></p>
						<p className="tweet-message">{user.dob}</p>
					</div>
					<p><b><i>{user.email}</i></b></p>
				</div>
			</div>
		</div>
	);
};

export default User;
