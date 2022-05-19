import React from 'react';
import Tweet from '../Tweet';

import './tweetList.css';

const TweetList = (properties) => {

    const { tweetList } = properties;

    return (
        <div>
            <ul>
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