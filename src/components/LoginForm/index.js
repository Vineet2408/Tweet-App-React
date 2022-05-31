import React from 'react';

import { useDispatch } from 'react-redux';

import { emailRegex } from '../../constants/regex';

import { loginUser } from './action';

import './loginForm.css';

import { useNavigate } from 'react-router';

const LoginForm = (properties) => {
	const navigate = useNavigate();

	const [email, setEmail] = React.useState('');

	const [emailVaild, setEmailValid] = React.useState();

	const [showError, setShowError] = React.useState(false);

	const [password, setPassword] = React.useState('');

	const [loginFailed, setLoginFailed] = React.useState(false);

	const dispatch = useDispatch();

	const validate = (regexp, value) => {
		if (regexp.test(value)) {
			return true;
		} else {
			return false;
		}
	};

	const emailChangeHandler = (event) => {
		setEmail(event.target.value);
		// if (emailRegex !== undefined && emailRegex !== null) {
		//     setEmailValid(validate(email, event.target.value));
		// }
	};

	const checkEmail = (value) => {
		setEmail(value);
		if (validate(emailRegex, value)) {
			setShowError(false);
			setEmail(true);
		} else {
			setShowError(true);
			setEmail(false);
		}
	};

	const emailBlurHandler = (event) => {
		setEmail(event.target.value);
	};

	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
	};

	const forgotClickHandler = (event) => {
		event.preventDefault();
		navigate('/auth/forgot');
	};

	const submitHandler = (event) => {
		event.preventDefault();
		console.log(event.target.elements[1].value);
		setEmail(event.target.elements[0].value);
		setPassword(event.target.elements[1].value);

		if (email.trim().length > 5 && password.trim().length > 5) {
			setShowError(false);
			const loginData = { email: email, password };
			dispatch(loginUser(loginData, setLoginFailed));
		} else {
			setShowError(true);
		}
	};

	return (
		<div className='justify-center'>
			<div className='login-component'>
				{loginFailed && (
					<div className='justify-center api-error '>
						<p>Invaild Credentials</p>
					</div>
				)}
				<div className='login-form-section'>
					<form onSubmit={submitHandler} className='login-form'>
						<div className='col clgp-8'>
							<label htmlFor={'email'}>{'Email'}</label>
							<input
								name={'email'}
								required={true}
								type={'email'}
								placeholder={`Enter your Email`}
								className='text-input wid-300 '
								value={email}
								onChange={emailChangeHandler}
								onBlur={emailBlurHandler}
							/>
							{showError && (
								<p
									style={{
										paddingLeft: '4px',
										color: 'red',
										fontWeight: '500',
									}}
								>
									Input is Invalid
								</p>
							)}
						</div>

						<div className='col clgp-8'>
							<label htmlFor='password'>Password</label>
							<input
								name='password'
								required={true}
								type='password'
								className='text-input wid-300 '
								placeholder='Enter your password'
								value={password}
								onChange={passwordChangeHandler}
							/>
						</div>
						<div className='space-between'>
							<button
								className='delete-button'
								type='button'
								onClick={forgotClickHandler}
							>
								Forgot Password
							</button>
							<button
								className='post-button'
								type='submit'
								disabled={false}
							>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
