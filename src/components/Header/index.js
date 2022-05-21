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
				>
					Tweets
				</button>
			</li>
			<li className='header-list-item-navigation'>
				<button
					className='header-navigation-button'
					type='button'
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
				>
					Login
				</button>
			</li>
			<li className='header-list-item-navigation'>
				<button
					className='header-navigation-button'
					type='button'
				>
					Register
				</button>
			</li>
		</ul>
	);
};
const Header = (properties) => {
	const {
		searchInputHandler,
		profilePicSrc,
	} = properties;

	const showMenuModel = (event) => {
		event.preventDefault();
	};

	const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

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
						<Route path='/auth/*' element={<LoggedOutNav />} />
						{ isUserLoggedIn && (
							<Route path='/*' element={<LoggedInNav />} />

						)}
						{
							!isUserLoggedIn && (
								<Route path='/*' element={<LoggedOutNav />} />
							)
						}
					</Routes>
				</nav>
			</div>
		</div>
	);
};

export default Header;
