import React from 'react';
import AddTweet from '../../components/AddTweet';

import TweetList from '../../components/TweetList';


import { useNavigate } from 'react-router';

import { redirectToLoginPage } from '../../services/loginService';

import ProfilePicUpload from '../../components/ProfilePicUpload';

import avatar from '../../images/default-user.png';

const AllTweetsPage = (properties) => {

    const navigate =  useNavigate();
    React.useEffect(()=> {
		console.log("hello");
        redirectToLoginPage(navigate);
    },[]);
	
	return (
		<div className="row rowgp-24 justify-center" style={{minWidth: '70%'}}>
			<div className="col clgp-16">
				<ProfilePicUpload avatarLink={avatar}/>
			</div>
			<div className='col clgp-16' style={{minWidth: '60%'}}>
				<AddTweet />
				<TweetList />
			</div>
		</div>
	);
};

export default AllTweetsPage;
