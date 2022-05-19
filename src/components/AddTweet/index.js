import React from 'react';
import TextAreaAutoGrow from '../UI/Inputs/TextAreaAutoGrow';

import './addTweet.css';

const AddTweet = () => {

    const [wantToPost, setWantToPost] = React.useState(false);

    const toggleWantToPost = (event) => {
        event.preventDefault();
        setWantToPost(!wantToPost);
    }

    const addTweetSubmitHanlder = (event) => {
        event.preventDefault();

    }

    const plusIconStyle = {fontSize: "18px", color: "white"};

    return (
        <div className="add-tweet-section">
            <div className="add-tweet-ask">
                <p className="text-underline">Want to Post a new Tweet?</p>
                <button
                    className="post-button toggle-add-post-button"
                    type="button"
                    onClick={toggleWantToPost}
                >
                    <i className="fa fa-plus" style={plusIconStyle} aria-hidden="true"></i>
                </button>
            </div>
            { wantToPost && 
                <div className="add-tweet-form-section">
                
                    <form onSubmit={addTweetSubmitHanlder} className="add-tweet-form">
                        <TextAreaAutoGrow name="message" type="text" placeholder="Message" label="Add a Tweet" />
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
