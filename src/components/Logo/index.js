import React from 'react';

import './logo.css';

import LogoImage from '../../images/tweet-app-icon.png'

const Logo = (properties) => {
	return (
		<div className="logo-with-text-wrapper " >
			<div className='logo-wrapper'>
				<img className='logo' src={LogoImage} alt="Logo"></img>
			</div>
			<p className="">Tweet-App</p>
		</div>
	);
};

export default Logo;
