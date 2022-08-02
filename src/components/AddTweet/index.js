import React from 'react';

import './addTweet.css';

import { useDispatch } from 'react-redux';
import { addTweet } from './action';
import { replyTweetByUsername } from '../Tweet/action';

const AddTweet = (properties) => {

    let { repliedTo } = properties;

    let showReplyTo = false;
    if (repliedTo !== undefined && repliedTo !== null && repliedTo.trim() !== '') {
        showReplyTo = true;
    }

    const [wantToPost, setWantToPost] = React.useState(false);

    const [message, setMessage] = React.useState();

    const [hashTags, setHashTags] = React.useState();

    const messageChangeHandler = (event) => {
        setMessage(event.target.value);
    }

    const hashTagsChangeHandler = (event) => {
        let value = event.target.value;
       
        setHashTags(value);
    }

    const dispatch = useDispatch();

      

    const toggleWantToPost = (event) => {
        event.preventDefault();
        setWantToPost(!wantToPost);
    }

    const addTweetSubmitHanlder = (event) => {
        event.preventDefault();
        let tweetData = {
            message: message,
            listOfTags: hashTags.split(','),  
        };
        if (showReplyTo) {
            tweetData.repliedTo = repliedTo;
            dispatch(replyTweetByUsername(localStorage.getItem("username"),repliedTo,tweetData));
        }
        else {
            dispatch(addTweet(tweetData));
        }
    }

    const plusIconStyle = {fontSize: "18px", color: "white"};

    return (
        <div className="add-tweet-section">
            <div className="add-tweet-ask">
                {!showReplyTo && 
                    <button className={`cursor-pointer ${wantToPost ? 'delete-button' : 'post-button'}`}
                        style={{marginTop: '24px'}}
                        onClick={toggleWantToPost}
                    >
                        
                        {wantToPost
                            ? <i className='fa fa-close' style={plusIconStyle} aria-hidden="true"></i>
                            : 'Post New Tweet'}
                    </button>
                }
                {showReplyTo &&
                    <button className={`cursor-pointer ${wantToPost ? 'delete-button' : 'post-button mb-24'}`}
                        onClick={toggleWantToPost}
                    >
                        
                        {wantToPost
                            ? <i className='fa fa-close' style={plusIconStyle} aria-hidden="true"></i>
                            : 'Reply'}
                    </button>
                }
                {/* <button
                    className="post-button toggle-add-post-button"
                    type="button"
                    onClick={toggleWantToPost}
                >
                    <i className={wantToPost?"fa fa-close":"fa fa-plus"} style={plusIconStyle} aria-hidden="true"></i>
                </button> */}
            </div>
            { wantToPost && 
                <div className={`add-tweet-form-section ${showReplyTo ? 'mb-24' : ''}`}>
                
                    <form onSubmit={addTweetSubmitHanlder} className="add-tweet-form">
                        <label htmlFor="message">Add a Tweet</label>
                        <textarea
                            onChange={messageChangeHandler}
                            className="text-input"
                            name="message"
                            type="text"
                            value={message}
                            placeholder="Message"
                            label="Add a Tweet" 
                            required
                        />
                        <input
                            onChange={hashTagsChangeHandler}
                            className="text-input"
                            type="text"
                            value={hashTags}
                            placeholder="Enter any hash tags separated by comma"
                        />
                        <div className="flex-end-button">
                            <button
                                type="submit"
                                className="add-tweet-submit-button post-button"
                            >
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            }
        </div>
    );
};

export default AddTweet;
