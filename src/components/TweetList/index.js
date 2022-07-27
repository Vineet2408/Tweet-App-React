import React from 'react';
import Tweet from '../Tweet';

import { useDispatch, useSelector } from 'react-redux';

import { getAllTweets } from './action';

import './tweetList.css';


function selector(state) {
  return state.tweetListReducer;
}

const TweetList = (properties) => {

    const [tweetList , setTweetList] = React.useState();

    const dispatch = useDispatch();
    const tweetListState = useSelector(selector);

    React.useEffect(() => {
        // if (username) {
            // dispatch(getAllTweetsOfUser(username,''));
        // }
        // else {
            dispatch(getAllTweets());
        // }
    }, []);

    React.useEffect(() => {
        setTweetList(tweetListState);
    }, [tweetListState]);

    
    if (tweetList === undefined || tweetList === null || tweetList.length <1) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <ul className="tweet-list">
                {tweetList.map((tweet, index) => {
                    if (tweet.repliedTo === null) {
                        return ( 
                            <li key={index}>
                                <Tweet tweet={tweet}></Tweet>
                            </li>);
                    }
                  
                })}
            </ul>
        </div>
    );
};

export default TweetList;