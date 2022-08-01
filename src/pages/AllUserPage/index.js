import React from 'react';

import UserList from '../../components/UserList'

import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router';

import { redirectUser } from '../../services/loginService';

function selector(state) {
	return state.loginReducer;
}

function photoSelector(state) {
    return state.photoUploadReducer;
}

const AllUserPage = (properties) => {

    const navigate =  useNavigate();

    const loginState = useSelector(selector);
	const photoUploadState = useSelector(photoSelector);

    React.useEffect(()=> {
        redirectUser(navigate);
    },[]);

	
    const s = {
        padding: '16px'
    }

    return (
        <div className="justify-center" style={s}>
            <UserList ></UserList>
        </div>
    );
};

export default AllUserPage;
