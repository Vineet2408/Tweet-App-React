import React from 'react';

import './registerForm.css';

const RegisterForm = (properties) => {

    const [formValid, setFormValid] = React.useState(false);

    const [firstName, setFirstName] = React.useState();
    const firstNameChangeHandler = (event) => {
        const value = event.target.value;
        setFirstName(value);
    };
    const [lastName, setLastName] = React.useState();
    const lastNameChangeHandler = (event) => {
        const value = event.target.value;
        setLastName(value);
    };
    const [email, setEmail] = React.useState();
    const emailChangeHandler = (event) => {
        const value = event.target.value;
        setEmail(value);
    };
    const [username, setUsername] = React.useState();
    const usernameChangeHandler = (event) => {
        const value = event.target.value;
        setUsername(value);
    };
    const [password, setPassword] = React.useState();
    const passwordChangeHandler = (event) => {
        const value = event.target.value;
        setPassword(value);
    };

    const [dob, setDob] = React.useState();
    const dobChangeHandler = (event) => {
        const value = event.target.value;
        setDob(value);
    };
    const [confirmPassword, setConfirmPassword] = React.useState();
    const confirmPasswordChangeHandler = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
        if (confirmPassword === password) {
            setFormValid(true);
        }
    };

    const [gender, setGender] = React.useState();

    const genderChangeHandler = (event) => {
        const value =  event.target.value;
        setGender(value)
    };
    const submitHandler = (event) => {
        console.log(dob);
        const registerData = {
            firstName,
            lastName,
            dob,
            email,
            username,
            gender,
            password,
            confirmPassword,
        }
    };

    return (
        <div className="registration-form-wrapper">
            <form onSubmit={submitHandler} className="registration-form">
                <div className="registration-form-container">
                    <div className="col clgp-16">
                        <input
                            className="text-input"
                            label="First Name"
                            name="firstName"
                            required={true}
                            type="text"
                            placeholder="Enter your First Name"
                            value={firstName}
                            onChange={firstNameChangeHandler}
                        />
                        <input
                            className="text-input"
                            label="Email"
                            name="email"
                            required={true}
                            type="email"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={emailChangeHandler}
                        />
                        <input
                            className="text-input"
                            label="Username"
                            name="username"
                            required={true}
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={usernameChangeHandler}
                        />
                        <input
                            className="text-input"
                            label="Password"
                            name="password"
                            required={true}
                            type="password"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={passwordChangeHandler}
                        />
                    </div>
                    <div className="col clgp-16">
                        <input
                            className="text-input"
                            label="Last Name"
                            name="lastName"
                            required={true}
                            type="text"
                            placeholder="Enter your Last Name"
                            value={lastName}
                            onChange={lastNameChangeHandler}
                        />
                        <select 
                            className="select-input"
                            label="Gender"
                            required={true}
                            name="gender"
                            onChange={genderChangeHandler}
                        >
                            <option selected={gender==='MALE'}>MALE</option>
                            <option selected={gender==='FEMALE'}>FEMALE</option>
                        </select>
                        <input
                            className="text-input"
                            type="date"
                            required={true}
                            label="Date of Birth"
                            name="dob"
                            value={dob}
                            onChange={dobChangeHandler}
                        />
                        <input
                            className="text-input"
                            label="Confirm Password"
                            name="confirmPassword"
                            required={true}
                            type="paswword"
                            placeholder="Confirm your Password"
                            value={confirmPassword}
                            onChange={confirmPasswordChangeHandler}
                        />
                    </div>
                </div>
                <div className="justify-center">
                    <button className="post-button" type="submit" disabled={!formValid}>Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
