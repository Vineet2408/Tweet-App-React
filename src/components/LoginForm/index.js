import React from 'react';

import { useDispatch } from 'react-redux';

import { emailRegex } from '../../constants/regex';
import DoubleButtonToggle from '../UI/DoubleButtonToggle';

import { loginUser } from './action';

import { LOGIN_USER_API } from '../../constants/api';

import axios from 'axios';

import './loginForm.css';

const LoginForm = (properties) => {

    const [loginWith, setLoginWith] = React.useState(true);

    const [username, setUsername] = React.useState('');

    const [email, setEmail] = React.useState('');

    const [emailVaild, setEmailValid] = React.useState();

    const [showError, setShowError] = React.useState(false);

    const [password, setPassword] = React.useState('');

    const  dispatch = useDispatch();


    const toggleLoginWith = (event) => {
        event.preventDefault();
        setLoginWith(!loginWith);
    }

    const validate = (regexp, value) => {
        if (regexp.test(value)) {
            return true;
        }
        else {
            return false;
        }
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
        // if (emailRegex !== undefined && emailRegex !== null) {
        //     setEmailValid(validate(email, event.target.value));
        // }
    }

    const checkEmail = (value) => {
        setEmail(value);
        if(validate(emailRegex, value)) {
            setShowError(false);
            setEmail(true);
        }
        else {
            setShowError(true);
            setEmail(false);
        }
    }

    const emailBlurHandler = (event) => {
        setEmail(event.target.value);
    }
    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }
    

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.elements[1].value);
        setEmail(event.target.elements[0].value);
        setPassword(event.target.elements[1].value);
        if (loginWith) {
            if (username.trim().length > 4  && password.trim().length > 5) {
                const loginData = {username,password};
                dispatch(loginUser(loginData));
            }
            else {
                setShowError(true);
            }
        }
        else {
            if (email.trim().length > 5  && password.trim().length > 5) {
                const loginData = {email,password};
                // dispatch(loginUser(loginData));
                const axiosConfig = {
                    data:{email,password},
                    method: 'post',
                    url: LOGIN_USER_API
                }
            
                axios(axiosConfig)
                .then((response) => {
                    console.log(response.data);
                }).catch((error)=> console.log(error));
            }
            else {
                setShowError(true);
            }
        }
    }

    return (
        <div className="justify-center">
        <div className="login-component">
            <div className="toggle-button-container">
                <DoubleButtonToggle 
                    firstButtonName={'Login with Username'}
                    secondButtonName={'Login with Email'}
                    firstButtonClick={toggleLoginWith}
                    secondButtonClick={toggleLoginWith}
                    toggled={loginWith}
                    setToggled={setLoginWith}
                ></DoubleButtonToggle>
                
            </div>
            <div className="login-form-section">
                <form onSubmit={submitHandler} className="login-form">
                    <div className="col clgp-8">
                        <label htmlFor={loginWith?'username':'email'}>{loginWith?'Username' : 'Email'}</label>
                        <input
                        
                            name={loginWith ? 'username' : 'email'}
                            required={true}
                            type={loginWith ? 'text' : 'email'}
                            placeholder={`Enter your `+ (loginWith ? 'Username' : 'Email')}
                            className="text-input wid-300 "
                            value={loginWith?username:email}
                            onChange = {loginWith? usernameChangeHandler:emailChangeHandler}
                            onBlur={loginWith? usernameChangeHandler:emailBlurHandler}
                        />
                        {showError && <p style={{paddingLeft:"4px",color:"red",fontWeight:"500"}}>Input is Invalid</p>}
                    </div>

                    <div className="col clgp-8">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            required={true}
                            type="password"
                            className="text-input wid-300 "
                            placeholder="Enter your password"
                            value={password}
                            onChange={passwordChangeHandler}
                        />
                    </div>
                    <div className="justify-center">
                        <button className="post-button" type="submit" disabled={false}>Login</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default LoginForm;
