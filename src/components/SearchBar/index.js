import React from 'react';

import './searchBar.css';

import { getUserBySearch } from '../UserList/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SearchBar = (properties) => {

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const[username, setUsername] = React.useState();

	const usernameChangeHandler = (event) => {
		let value = event.target.value;
		setUsername(value);
	}

	const searchInputHandler = (event) =>{
		event.preventDefault();
		dispatch(getUserBySearch(username));
		navigate("/search");

	}
	return (
		<div className="d-flex justify-center">
			<form onSubmit={searchInputHandler} className="search-bar">
				<input
					className="search-input"
					placeholder='Search'
					name='search'
					type='text'
					defaultValue={username}
					onChange={usernameChangeHandler}
					onBlur={usernameChangeHandler}
				/>
				<button className='cancel-search-button' type="button">
					<i className="fa fa-close" aria-hidden='true'></i>
				</button>
				<button className='search-button' type='submit'>
					<i className='fa fa-search' aria-hidden='true'></i>
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
