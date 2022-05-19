import React from 'react';
import Logo from '../Logo';
import ProfilePic from '../UI/ProfilePic';
import SearchBar from '../SearchBar';

import './header.css';
import { Route, Routes } from 'react-router-dom';

export const LoggedInNav = (properties) => {
	return (
		<ul className='header-list-navigation'>
			<li className='header-list-item-navigation'>
				<button
					className='header-navigation-button'
					type='button'
					onClick={loggedInToggle}
				>
					Tweets
				</button>
			</li>
			<li className='header-list-item-navigation'>
				<button
					className='header-navigation-button'
					type='button'
					onClick={loggedInToggle}
				>
					All Users
				</button>
			</li>
		</ul>
	);
};

export const LoggedOutNav = (properties) => {
	return (
		<ul className='header-list-navigation'>
			<li className='header-list-item-navigation'>
				<button
					className='header-navigation-button'
					type='button'
					onClick={loggedOutToggle}
				>
					Login
				</button>
			</li>
			<li className='header-list-item-navigation'>
				<button
					className='header-navigation-button'
					type='button'
					onClick={loggedOutToggle}
				>
					Register
				</button>
			</li>
		</ul>
	);
};
const Header = (properties) => {
	const {
		loggedInToggle,
		loggedOutToggle,
		searchInputHandler,
		profilePicSrc,
	} = properties;

	const showMenuModel = (event) => {
		event.preventDefault();
	};

	return (
		<div className='header'>
			<div className='top-row-header'>
				<div className='logo-section'>
					<Logo />
				</div>
				<div className='search-bar-section'>
					<SearchBar searchInputHandler={searchInputHandler} />
				</div>
				<div className='profile-pic-section'>
					<button
						type='button'
						className='profile-button-wrapper'
						onClick={showMenuModel}
					>
						<ProfilePic profilePicSrc={profilePicSrc} size={32} />
					</button>
				</div>
			</div>
			<div className='bottom-row-header'>
				<nav className='d-flex'>
					<Routes>
						<Route path='/auth/*' element={<h1>h</h1>} />
					</Routes>
				</nav>
			</div>
		</div>
	);
};

export default Header;
