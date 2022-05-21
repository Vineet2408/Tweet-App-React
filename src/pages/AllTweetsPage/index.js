import React from 'react';
import AddTweet from '../../components/AddTweet';

import TweetList from '../../components/TweetList';


import { useNavigate } from 'react-router';

import { redirectUser } from '../../services/loginService';

const AllTweetsPage = (properties) => {

    const navigate =  useNavigate();
    React.useEffect(()=> {
        redirectUser(navigate);
    },[]);
	
	return (
		<div className='col clgp-16'>
			<AddTweet />
			<TweetList />
		</div>
	);
};

export default AllTweetsPage;
