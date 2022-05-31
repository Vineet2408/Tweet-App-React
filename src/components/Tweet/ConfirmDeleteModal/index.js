import React from 'react';

import { deleteTweetByUsername } from '../action';

import { useDispatch } from 'react-redux';

const ConfirmDeleteModal = (properties) => {

    const dispatch = useDispatch();

    const { tweet, cancelHandler } = properties;
    const  username  = localStorage.getItem('username');

    const deleteConfirmTweetHandler = (event) => {
        event.preventDefault();
        console.log(username, tweet.id);
        dispatch(deleteTweetByUsername(tweet.username,tweet.id,tweet));
        cancelHandler(event);
    };

    return (
        <div className="backdrop">
            <div className="card modal">
                <div className="col clgp-16">
                    <h3>Are You Sure you want to delete this tweet?</h3>
                    <div style={{display:'flex', justifyContent:'flex-end'}}>
                        <div className="row rowgp-8">
                            <button className="delete-button" onClick={deleteConfirmTweetHandler}>Yes, Confirm</button>
                            <button className="normal-button" onClick={properties.cancelHandler}>No, Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDeleteModal;
