import React from 'react';
import Tweet from '../Tweet';

import { useDispatch, useSelector } from 'react-redux';

import { getAllTweets, getAllTweetsOfUser } from './action';

import './tweetList.css';

import tweetLogo from '../../images/tweetLogo.jpg';

function selector(state) {
  return state.tweetListReducer;
}

const TweetList = (properties) => {

    // const [tweetList , setTweetList] = React.useState();

    const { username } = properties;

    // const dispatch = useDispatch();
    // const tweetListState = useSelector(selector);

    React.useEffect(() => {
        if (username) {
            // dispatch(getAllTweetsOfUser(username,''));
        }
        else {
            // dispatch(getAllTweets());
        }
    }, []);

    // React.useEffect(() => {
    //     setTweetList(tweetListState);
    // }, [tweetListState]);

    // if (tweetList === undefined || tweetList === null || tweetList.length < 1) {
        let tweetList = [{
            handle:'vineet',
            message: 'How are you',
            likes: 23,
            dislikes: 43,
            numberOfReplies:43,
            tweetedTo:null,
            hashTags: ['asking', 'health', 'care'],
            avatarLink: tweetLogo,
        },
        {
            handle:'lakshit',
            message: 'I am Fine and  you',
            likes: 23,
            dislikes: 43,
            numberOfReplies:43,
            tweetedTo:null,
            hashTags: ['answering and asking', 'health', 'care'],
            avatarLink: tweetLogo,
        },
        {
            handle:'some person',
            message: 'Go somewhere else',
            likes: 23,
            dislikes: 43,
            numberOfReplies:43,
            tweetedTo:null,
            hashTags: ['problem?', 'yes', 'i dont care'],
            avatarLink: tweetLogo,
        }];
        // setTweetList(list);
    // }

    return (
        <div>
            <ul className="tweet-list">
                {tweetList.map((tweet, index) => {
                   return ( <li>
                        <Tweet tweet={tweet}></Tweet>
                    </li>);
                })}
            </ul>
        </div>
    );
};

export default TweetList;