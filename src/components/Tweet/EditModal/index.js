import React from 'react';
import { updateTweetByUsername } from '../action';

import { useDispatch } from 'react-redux';

const EditModal = (properties) => {

    const { tweet,closeEditModal } = properties;
    let { message, listOfTags }= tweet;

    if (message === undefined || message === null) {
        message = '';
    }
    const [newMessage, setNewMessage] = React.useState(message);

    const dispatch = useDispatch();

    let h ='';
    if (tweet.listOfTags !== undefined && tweet.listOfTags !== null) {
        for(let i=0;i < listOfTags.length; i++ )
        {
            h+=listOfTags[i]+",";
        }
    }
    
    const [hashTags, setHashTags] = React.useState(h);

    const messageChangeHandler = (event) => {
        setNewMessage(event.target.value);
    }

    const hashTagsChangeHandler = (event) => {
        let value = event.target.value;
        setHashTags(value);
    }

    const updateTweetSubmitHanlder = (event) => {
        event.preventDefault();
        let tweetData = {
            message: newMessage,
            listOfTags: hashTags.split(','),  
        };
        dispatch(updateTweetByUsername(tweet.username, tweet.id, tweetData));
        closeEditModal(event);
    }

  


    return (
        <div className="backdrop">
            <div className="card modal col clgp-16">
            <h2>Update Tweet</h2>
                <form onSubmit={updateTweetSubmitHanlder} className="col clgp-16">
                    <label htmlFor="message">Message</label>
                    <input
                        className="text-input"
                        type="text"
                        defaultValue={newMessage}
                        name="message"
                        onChange={messageChangeHandler}
                        placeholder="type you message"
                    />
                    <label htmlFor="hastags">HashTags</label>
                    <input
                        name="hastags"
                        className="text-input"
                        type="text"
                        defaultValue={hashTags}
                        onChange={hashTagsChangeHandler}
                        placeholder="enter any hashtag you want"
                    />
                    <div className="row rowgp-24">
                        <button
                            type="submit"
                            className="put-button"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            className="delete-button"
                            onClick={properties.closeEditModal}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
        )
}

export default EditModal
