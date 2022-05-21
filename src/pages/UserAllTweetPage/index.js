import React from 'react';

import { Navigate } from 'react-router';

import { redirectUser } from '../../services/loginService';

const UserAllTweetPage = (properties) => {
    const navigate =  useNavigate();
    React.useEffect(()=> {
        redirectUser(navigate);
    },[]);
	
    
    return (
        <div>
            
        </div>
    );
};

export default UserAllTweetPage;
