import React from 'react';
import ProfilePic from '../UI/ProfilePic';

import './user.css';

const User = (properties) => {
	const { user } = properties;
	return (
		<div>
			<div>
				<ProfilePic profilePicSrc={user.avatarLink} size={32}/>
			</div>
			<div>
				<p>{user.firstName}{" " }{user.lastName}</p>
				<p>{user.username}</p>
			</div>
		</div>
	);
};

export default User;
