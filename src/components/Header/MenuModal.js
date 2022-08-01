import React from 'react';
import './header.css';

const MenuModal = (properties) => {

	const logoutButtonClickHandler = (event) => {
		event.preventDefault();
		properties.method();
		properties.toggle(event);
	};

	return (
		<div className="menu-modal">
			<ul className="row">
				<li className='d-flex'>
					<button
						type='button'
						className="menu-modal-option"
						onClick={logoutButtonClickHandler}
					>
						Logout
					</button>
				</li>
			</ul>
		</div>
	);
};

export default MenuModal;
