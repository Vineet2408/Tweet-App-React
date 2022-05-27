import React from 'react';
import LoginForm from '../../components/LoginForm';
import { useNavigate } from 'react-router';

import { useSelector } from 'react-redux';
import { redirectToHomePage } from '../../services/loginService';

function selector(state){
    return state.loginReducer;
}
const LoginPage = (properties) => {
    
    const loginState = useSelector(selector);
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(loginState.isUserLoggedIn) {
            navigate('/home');
        }
    }, [loginState]);
    React.useEffect(()=>{
        redirectToHomePage(navigate);
    }, []);

    return (
        <div>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
