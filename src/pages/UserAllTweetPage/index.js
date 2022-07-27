import React from 'react';

import { Navigate } from 'react-router';

import { redirectUser } from '../../services/loginService';

function selector(state) {
	return state.loginReducer;
}

function photoSelector(state) {
    return state.photoUploadReducer;
}

const UserAllTweetPage = (properties) => {
    const navigate =  useNavigate();

    const loginState = useSelector(selector);
	const photoUploadState = useSelector(photoSelector);

    React.useEffect(()=> {
        redirectUser(navigate);
    },[loginState, photoUploadState]);
	
    
    return (
        <div>
            
        </div>
    );
};

export default UserAllTweetPage;
