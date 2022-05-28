import axios from 'axios';
import React from 'react';

import {SECURITY_API, CHANGE_PASSWORD_API} from '../../constants/api';

import { useNavigate } from 'react-router';

const ForgotPassword = (properties) => {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState();
    const [securityAnswer, setSecurityAnswer] = React.useState();

    const [newPassword, setNewPassword] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState();


    const [showChangePasswordForm, setShowChangePasswordForm] = React.useState(false);

    const emailChangeHandler = (event) => {
        let value = event.target.value;
        setEmail(value);
    }

    const answerChangeHandler = (event) => {
        let value = event.target.value;
        setSecurityAnswer(value);
    }

    const newPasswordChangeHandler = (event) => {
        let value = event.target.value;
        setNewPassword(value);
    }

    const confirmPasswordChangeHandler = (event) => {
        let value = event.target.value;
        setConfirmPassword(value);
    }

    const passwordSubmitHandler = (event) => {
        event.preventDefault();
        let changeData = {
            email,
            password:newPassword,
        };

        let axiosConfig = {method:'post',data:changeData,url:CHANGE_PASSWORD_API};

        axios(axiosConfig)
        .then((response)=> {
            if (response.data.username !== undefined && response.data.username !== null) {
                navigate("/auth/login");
            }
            else {
                console.log("api failed");
            }
        })
        .catch((error)=> console.log(error));

    }

    const submitHandler = (event) => {
        event.preventDefault();

        let forgotData = {
            email,
            securityAnswer,
        };

        let axiosConfig = {method:'post',data:forgotData,url:SECURITY_API};

        axios(axiosConfig)
        .then((response)=> {
            if (response.data) {
                setShowChangePasswordForm(response.data);
            }
            else {
                console.log("wrong answer");
            }
        })
        .catch((error)=> console.log(error));

    }

    return (
        <div className="row justify-center" style={{width: "100%"}}>
        {!showChangePasswordForm && 
            <form onSubmit={submitHandler} className="col clgp-16 card" style={{padding:"24px", maxWidth:"600px"}}>
                <div className="col clgp-8" style={{width:"100%"}}>
                    <label htmlFor={"email"}>Email</label>
                    <input
                        className="text-input"
                        name="email"
                        required
                        type="text"
                        placeholder="Enter your email"
                        defaultValue={email}
                        onChange={emailChangeHandler}
                        onBlur={emailChangeHandler}
                    />
                </div>
                <div className="col clgp-8">
                    <label htmlFor={"answer"}>Who is favorite Superhero(Security Question)</label>
                    <input
                        className="text-input"
                        name="answer"
                        required
                        type="text"
                        placeholder="Enter your security answer"
                        defaultValue={securityAnswer}
                        onChange={answerChangeHandler}
                        onBlur={answerChangeHandler}
                    />
                </div>
                <div className="justify-center">
                    <button className="post-button" type="submit">Submit</button>
                </div>
            </form>
        }
           
        {
            showChangePasswordForm &&
            <div className="col clgp-16">
                <form onSubmit={passwordSubmitHandler} className="col clgp-16 card"  style={{padding:"24px", maxWidth:"600px"}}>
                <div className="col clgp-8">
                    <label htmlFor={"newPassword"}>New Password</label>
                    <input
                        className="text-input"
                        name="newPassword"
                        required
                        type="text"
                        placeholder="Enter your New Password"
                        defaultValue={newPassword}
                        onChange={newPasswordChangeHandler}
                        onBlur={newPasswordChangeHandler}
                    />
                </div>
                <div className="col clgp-8">
                    <label htmlFor={"confirmPassword"}>Confirm Password</label>
                    <input
                        className="text-input"
                        name="confirmPassword"
                        required
                        type="text"
                        placeholder="Enter your confirmPassword"
                        defaultValue={confirmPassword}
                        onChange={confirmPasswordChangeHandler}
                        onBlur={confirmPasswordChangeHandler}
                    />
                </div>
                <div className="justify-center">
                    <button className="post-button" type="submit">Change</button>
                </div>
                </form>
            </div>
        }
        </div>
    );
};

export default ForgotPassword;
