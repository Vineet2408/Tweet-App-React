import React from 'react';
import { useNavigate } from 'react-router';

import { redirectToHomePage, redirectToLoginPage, redirectUser } from '../../services/loginService';

const LoadingRedirect = (properties) => {

    const navigate = useNavigate();
    React.useEffect(()=> {
        redirectToHomePage(navigate);
        redirectToLoginPage(navigate);
    },[]);

    return (
        <div className="card">
           <p> Loading... </p>
        </div>
    )
}

export default LoadingRedirect;
