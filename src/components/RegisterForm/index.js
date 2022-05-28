import React from 'react';

import './registerForm.css';

import { useDispatch } from 'react-redux';

import { registerUser } from './action';
import { useNavigate } from 'react-router';

const RegisterForm = (properties) => {

    const dispatch = useDispatch();

    const [formValid, setFormValid] = React.useState(false);

    const [firstName, setFirstName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [email, setEmail] = React.useState();
    const [username, setUsername] = React.useState();
    const [dob, setDob] = React.useState();
    const [gender, setGender] = React.useState();

    const [password, setPassword] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState();

    const [securityAnswer, setSecurityAnswer] = React.useState();

    const securityChangeHandler = (event) => {
        let value  = event.target.value;
        setSecurityAnswer(value);
    }

    const navigate = useNavigate();


    const firstNameChangeHandler = (event) => {
        const value = event.target.value;
        setFirstName(value);
        if (confirmPassword === password && password !== undefined && password !== null && password.trim() !== '') {
            setFormValid(true);
        }
        else {
            setFormValid(false);
        }
    };
    const lastNameChangeHandler = (event) => {
        const value = event.target.value;
        setLastName(value);
        if (confirmPassword === password && password !== undefined && password !== null && password.trim() !== '') {
            setFormValid(true);
        }
        else {
            setFormValid(false);
        }
    };
    const emailChangeHandler = (event) => {
        const value = event.target.value;
        setEmail(value);
        if (confirmPassword === password && password !== undefined && password !== null && password.trim() !== '') {
            setFormValid(true);
        }
        else {
            setFormValid(false);
        }
    };
    const usernameChangeHandler = (event) => {
        const value = event.target.value;
        setUsername(value);
        if (confirmPassword === password && password !== undefined && password !== null && password.trim() !== '') {
            setFormValid(true);
        }
        else {
            setFormValid(false);
        }
    };
    const passwordChangeHandler = (event) => {
        const value = event.target.value;
        setPassword(value);
        if (confirmPassword === value && value !== undefined && value !== null && value.trim() !== '') {
            setFormValid(true);
        }
        else {
            setFormValid(false);
        }
    };

    const dobChangeHandler = (event) => {
        const value = event.target.value;
        setDob(value);
        if (confirmPassword === password && password !== undefined && password !== null && password.trim() !== '') {
            setFormValid(true);
        }
        else {
            setFormValid(false);
        }
    };
    const confirmPasswordChangeHandler = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
        if (value === password && password !== undefined && password !== null && password.trim() !== '') {
            setFormValid(true);
        }
        else {
            setFormValid(false);
        }
    };


    const genderChangeHandler = (event) => {
        const value =  event.target.value;
        setGender(value);
        if (confirmPassword === password && password !== undefined && password !== null && password.trim() !== '') {
            setFormValid(true);
        }
        else {
            setFormValid(false);
        }

    };
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(dob);
        if(password !== confirmPassword) {
            setFormValid(false);
        }
        const registerData = {
            firstName,
            lastName,
            dateOfBirth:dob,
            email,
            username,
            gender,
            password,
            confirmPassword,
            avatarLink:'',
            securityAnswer,
        }

        dispatch(registerUser(registerData));

        navigate("/auth/login");

    };

    return (
        <div className="registration-form-wrapper">
            <form onSubmit={submitHandler} className="registration-form">
                <div className="registration-form-container">
                    <div className="col clgp-16">
                        <label htmlFor={"firstName"}>First Name</label>
                        <input
                            className="text-input"
                            label="First Name"
                            name="firstName"
                            required={true}
                            type="text"
                            placeholder="Enter your First Name"
                            defaultValue={firstName}
                            onChange={firstNameChangeHandler}
                        />
                        <label htmlFor={"email"}>Email</label>
                        <input
                            className="text-input"
                            label="Email"
                            name="email"
                            required={true}
                            type="email"
                            placeholder="Enter your Email"
                            defaultValue={email}
                            onChange={emailChangeHandler}
                        />
                        <label htmlFor={"username"}>Username</label>
                        <input
                            className="text-input"
                            label="Username"
                            name="username"
                            required
                            type="text"
                            placeholder="Enter your username"
                            defaultValue={username}
                            onChange={usernameChangeHandler}
                        />
                        <label htmlFor={"password"}>Password</label>
                        <input
                            className="text-input"
                            label="Password"
                            name="password"
                            required
                            type="password"
                            placeholder="Enter your Password"
                            defaultValue={password}
                            onChange={passwordChangeHandler}
                        />
                    </div>
                    <div className="col clgp-16">
                        <label htmlFor={"lastName"}>Last Name</label>
                        <input
                            className="text-input"
                            label="Last Name"
                            name="lastName"
                            required
                            type="text"
                            placeholder="Enter your Last Name"
                            defaultValue={lastName}
                            onChange={lastNameChangeHandler}
                        />
                        <label htmlFor={"gender"}>Gender</label>
                        <select 
                            className="select-input"
                            label="Gender"
                            required
                            name="gender"
                            onChange={genderChangeHandler}
                        >
                            <option selected={gender==='MALE'}>MALE</option>
                            <option selected={gender==='FEMALE'}>FEMALE</option>
                        </select>
                        <label htmlFor={"dob"}>Date of Birth</label>
                        <input
                            className="text-input"
                            type="date"
                            required
                            label="Date of Birth"
                            name="dob"
                            defaultValue={dob}
                            onChange={dobChangeHandler}
                        />
                        <label htmlFor={"confirmPassword"}>Confirm Password</label>
                        <input
                            className="text-input"
                            label="Confirm Password"
                            name="confirmPassword"
                            required
                            type="password"
                            placeholder="Confirm your Password"
                            defaultValue={confirmPassword}
                            onChange={confirmPasswordChangeHandler}
                            onBlur={confirmPasswordChangeHandler}
                        />
                    </div>
                </div>
                <div className="col clgp-8" style={{padding:"32px"}}>
                    <label htmlFor="securityAnswer">Who is favorite Superhero(Security Question)</label>
                    <input
                        type="text"
                        required
                        name="securityAnswer"
                        placeholder="Enter the ans for the above security question"
                        defaultValue={securityAnswer}
                        onChange={securityChangeHandler}
                        onBlur={securityChangeHandler}
                        className="text-input"
                    />
                </div>
                <div className="justify-center">
                    <button className="post-button" type="submit" disabled={!formValid}>Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
