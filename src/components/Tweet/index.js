import React from 'react';
import ProfilePic from '../UI/ProfilePic';

import './tweet.css';

const Tweet = (properties) => {
    const { tweet } = properties;

    const { tweetedTo } = tweet;
    let showTweetedTo = false;

    if (tweetedTo !== undefined && tweetedTo !== null && tweetedTo.trim() !== '') {
        showTweetedTo = true;
    }
    return (
        <div>
            <div>
                <div>
                    <ProfilePic size={32} profilePicSrc={tweet.avatarLink} />
                </div>
                <div>
                    <p><b>{tweet.handle}</b></p>
                    {showTweetedTo && <p><i>{tweet.tweetedTo}</i></p>}
                </div>
                
                <div><p>{tweet.message}</p></div>
                <div>{tweet.hashTags.map((hashTag, index) => <span className="hashTag"><i>#{hashTag}</i></span>)}</div>
            </div>
            <div>
                <div><span><p>{tweet.likes}</p> <button type="submit"><i className="fa fa-thumbs-up" aria-hidden="true"></i></button></span></div>
                <div><span><p>{tweet.dislikes}</p><button type="submit"><i className="fa fa-thumbs-down" aria-hidden="true"></i></button></span></div>
                <div><span><p>{tweet.numberOfReplies}</p><button type="submit"><i className="fa fa-comments-o" aria-hidden="true"></i></button></span></div>
            </div>
        </div>
    );
};
// add code for reply

export default Tweet;
