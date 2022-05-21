import React from 'react';
import { useNavigate } from 'react-router';

import { redirectUser } from '../../services/loginService';

const LoadingRedirect = (properties) => {

    const navigate = useNavigate();
    React.useEffect(()=> {
        redirectUser(navigate);
    },[]);

    return (
        <div className="card">
           <p> Loading... </p>
        </div>
    )
}

export default LoadingRedirect;
