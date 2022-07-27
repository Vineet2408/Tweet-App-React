import React from 'react';
import Logo from '../Logo';
import ProfilePic from '../UI/ProfilePic';
import SearchBar from '../SearchBar';

import './header.css';
import { NavLink, Route, Routes } from 'react-router-dom';

import MenuModal from './MenuModal';

import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../LoginForm/action';

// className='header-navigation-button'
export const LoggedInNav = (properties) => {
	return (
		<ul className='header-list-navigation'>
			<li className='header-list-item-navigation'>
				<NavLink className={(navData) => navData.isActive ? 'header-navlink-active' : 'header-navlink'} to="/tweets">Tweets</NavLink>
			</li>
			<li className='header-list-item-navigation'>
				<NavLink className={(navData) => navData.isActive ? 'header-navlink-active': 'header-navlink'} to="/users">All Users</NavLink>
				
			</li>
		</ul>
	);
};

export const LoggedOutNav = (properties) => {
	return (
		<ul className='header-list-navigation'>
			<li className='header-list-item-navigation'>
				<NavLink className={(navData)=> navData.isActive ? 'header-navlink-active' : 'header-navlink'} to="/auth/login">Login</NavLink>
			</li>
			<li className='header-list-item-navigation'>
				<NavLink className={(navData)=> navData.isActive? 'header-navlink-active' : 'header-navlink'} to="/auth/register">Register</NavLink>
				
			</li>
		</ul>
	);
};

function selector(state) {
	return state.loginReducer;
}

function photoSelector(state) {
    return state.photoUploadReducer;
}

const Header = (properties) => {

	const {
		profilePicSrc,
	} = properties;
	const dispatch = useDispatch();

	const loginState = useSelector(selector);
	const photoUploadState = useSelector(photoSelector);

	const [showmodal, setShowModal] = React.useState(false);

	const showMenuModel = (event) => {
		event.preventDefault();

		setShowModal(!showmodal);
	};

	const logoutUserHandler = () => {
		dispatch(logoutUser());
	}

	React.useEffect(()=>{console.log(loginState)},[loginState,photoUploadState])

	const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
	
	return (
		<div className='header'>
			<div className='top-row-header'>
				<div className='logo-section'>
					<Logo />
				</div>
				<div className='search-bar-section'>
					<Routes>
						{ isUserLoggedIn && (
							<Route path='/*' element={<SearchBar />} />

						)}
						
					</Routes>
					{/* <SearchBar /> */}
				</div>
				<div className='profile-pic-section'>
					<button
						type='button'
						className='profile-button-wrapper'
						onClick={showMenuModel}
					>
						<ProfilePic profilePicSrc={photoUploadState.avatarLink || loginState.avatarLink} size={32} />
					</button>
					
					{showmodal && <MenuModal method={logoutUserHandler} toggle={showMenuModel}/> }
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
