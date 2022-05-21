import React from 'react';

import UserList from '../../components/UserList'

import { useNavigate } from 'react-router';

import { redirectUser } from '../../services/loginService';

const AllUserPage = (properties) => {

    const navigate =  useNavigate();
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
