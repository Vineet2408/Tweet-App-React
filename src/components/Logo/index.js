import React from 'react';

import './logo.css';

import LogoImage from '../../images/tweetLogo.jpg'

const Logo = (properties) => {
	return (
		<div className="logo-with-text-wrapper " >
			<div className='logo-wrapper'>
				<img className='logo' src={LogoImage} alt="Logo"></img>
			</div>
			<p className="text-underline d-flex">Tweet-App</p>
		</div>
	);
};

export default Logo;
