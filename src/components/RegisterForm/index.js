import React from 'react';

import TextInput from '../UI/Inputs/TextInput';
import SelectInput from '../UI/Inputs/SelectInput';

import DateSelector from '../UI/Inputs/DateSelector';

import './registerForm.css';

const RegisterForm = (properties) => {
    const gender = ['MALE','FEMALE','OTHER','prefer not to state'];

    const submitHandler = (event) => {

    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <TextInput
                        label="First Name"
                        name="firstName"
                        required="true"
                        type="text"
                        placeholder="Enter your First Name"
                    />
                    <TextInput
                        label="Email"
                        name="email"
                        required="true"
                        type="email"
                        placeholder="Enter your Email"
                    />
                    <TextInput
                        label="Username"
                        name="username"
                        required="true"
                        type="text"
                        placeholder="Enter your username"
                    />
                    <TextInput
                        label="Password"
                        name="password"
                        required="true"
                        type="password"
                        placeholder="Enter your Password"
                    />
                </div>
                <div>
                    <TextInput
                        label="Last Name"
                        name="lastName"
                        required="true"
                        type="text"
                        placeholder="Enter your Last Name"
                    />
                    <SelectInput 
                        label="Gender"
                        required="true"
                        name="gender"
                        options={gender}
                    />
                    <DateSelector
                        required="true"
                        label="Date of Birth"
                        name="dob"
                    />
                    <TextInput
                        label="Confirm Password"
                        name="confirmPassword"
                        required="true"
                        type="paswword"
                        placeholder="Confirm your Password"
                    />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
