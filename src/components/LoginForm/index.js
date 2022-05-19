import React from 'react';
import TextInput from '../UI/Inputs/TextInput';

import { emailRegex } from '../../constants/regex';
import DoubleButtonToggle from '../UI/DoubleButtonToggle';

import './loginForm.css';

const LoginForm = (properties) => {

    const [loginWith, setLoginWith] = React.useState(true);

    const [username, setUsername] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const toggleLoginWith = (event) => {
        event.preventDefault();
       
        setLoginWith(!loginWith);
    }

    const submitHandler = (event) => {

    }

    return (
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
                    <TextInput
                        label={loginWith ? 'Username' : 'Email'}
                        name={loginWith ? 'username' : 'email'}
                        required="true"
                        type={loginWith ? 'text' : 'email'}
                        placeholder={`Enter your `+ loginWith ? 'Username' : 'Email'}
                        regex={loginWith ? null : emailRegex}
                        errorMessage={`Invalid `+loginWith ? '' : 'Email'}
                        setter={loginWith ? setUsername : setEmail}
                        
                    />
                    <TextInput
                        label="Password"
                        name="password"
                        required="true"
                        type="password"
                        regex={null}
                        placeholder="Enter your password"
                        setter={setPassword}
                    />
                    <div className="justify-center">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
