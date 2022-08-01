import React from 'react';
import AddTweet from '../../components/AddTweet';

import TweetList from '../../components/TweetList';

import { useNavigate } from 'react-router';

import { redirectToLoginPage } from '../../services/loginService';

import ProfilePicUpload from '../../components/ProfilePicUpload';

import {useSelector}  from 'react-redux'

function selector(state) {
	return state.loginReducer;
}

function photoSelector(state) {
    return state.photoUploadReducer;
}

const AllTweetsPage = (properties) => {


	const loginState = useSelector(selector);
	const photoUploadState = useSelector(photoSelector);

    const navigate =  useNavigate();
    React.useEffect(()=> {
		console.log("hello");
        redirectToLoginPage(navigate);
    },[loginState, photoUploadState]);
	
	return (
		<div className="row rowgp-24 justify-center" style={{minWidth: '70%'}}>
			<div className="col clgp-16">
				<ProfilePicUpload avatarLink={loginState.avatarLink}/>
			</div>
			<div className='col clgp-16' style={{minWidth: '60%'}}>
				<AddTweet />
				<TweetList />
			</div>
		</div>
	);
};

export default AllTweetsPage;
