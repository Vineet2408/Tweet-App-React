import React from 'react';
import ProfilePic from '../UI/ProfilePic';

import { likeTweetByUsername,
        deleteTweetByUsername,
        updateTweetByUsername,
        replyTweetByUsername } from './action';

import { useDispatch } from 'react-redux';

import './tweet.css';

const Tweet = (properties) => {
    const { tweet } = properties;

    const dispatch = useDispatch();

    const [showAllReplies, setShowAllReplies] = React.useState(false);

    const { tweetedTo } = tweet;
    let showTweetedTo = false;

    if (tweetedTo !== undefined && tweetedTo !== null && tweetedTo.trim() !== '') {
        showTweetedTo = true;
    }

    let username = '';

    const likeClickHandler = (event) => {
        event.preventDefault();
        
        dispatch(likeTweetByUsername(username));
    }
    const dislikeClickHandler = (event) => {
        event.preventDefault();

    }
    const replyClickHandler = (event) => {
        event.preventDefault();
        setShowAllReplies(true);
        // dispatch(replyTweetByUsername(username));

    }
    return (
        <div className="tweet-wrapper">
            <div className="col clgp-8">
                <div className="row rowgp-16">
                    <div className="d-flex">
                        <ProfilePic size={64} profilePicSrc={tweet.avatarLink} />
                    </div>
                    <div className="col">
                        <div className="col clgp-8">
                            <p className="tweet-username"><b>{tweet.handle}</b></p>
                            {showTweetedTo && <p className="tweet-tweetedTo"><i>{tweet.tweetedTo}</i></p>}
                        </div>
                        <div className='col clgp-8'>
                            <p className="tweet-message">tweeted:- {tweet.message}</p>
                            <div>{tweet.hashTags.map((hashTag, index) => <span className="hashTag"><i>#{hashTag}</i></span>)}</div>
                         </div>
                    </div>
                </div>
                
            </div>
            <div className="voting-section">
                <div className="d-flex">
                    <span className="tweet-votes ">
                        <p className="tweet-votes-counts">{tweet.likes}</p>
                        <button className="toggle-add-post-button" onClick={likeClickHandler} type="button">
                            <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                        </button>
                    </span>
                </div>
                <div className="d-flex">
                    <span  className="tweet-votes">
                        <p className="tweet-votes">{tweet.dislikes}</p>
                        <button className="toggle-add-post-button" onClick={dislikeClickHandler} type="button">
                            <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                        </button>
                    </span>
                </div>
                <div className="d-flex">
                    <span  className="tweet-votes">
                        <p className="tweet-votes">{tweet.numberOfReplies}</p>
                        <button className="toggle-add-post-button" onClick={replyClickHandler} type="button">
                            <i className="fa fa-comments-o" aria-hidden="true"></i>
                        </button>
                    </span>
                </div>
            </div>
            {showAllReplies &&
             (<div>
                
            </div>)}
        </div>
    );
};
// add code for reply

export default Tweet;
