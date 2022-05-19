import React from 'react';

import TextInput from '../UI/Inputs/TextInput';

import './searchBar.css';

const SearchBar = (properties) => {

    const { searchInputHandler } = properties;

	return (
		<div className="d-flex">
			<form onSubmit={searchInputHandler} className="search-bar">
				<input
					className="search-input"
					placeholder='Search'
					name='search'
					type='text'
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
