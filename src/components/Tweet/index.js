import React from 'react';
import ProfilePic from '../UI/ProfilePic';

import { likeTweetByUsername,
        getAllRepliesOfTweet} from './action';

import { useDispatch, useSelector } from 'react-redux';

import './tweet.css';
import EditModal from './EditModal';

import ConfirmDeleteModal from './ConfirmDeleteModal';
import ReplySection from '../UI/ReplySection';


function repliesSelector(state) {
    return state.repliesOfAllTweetReducer;
}

function tweetListSelector(state) {
    return state.tweetListReducer;
}

const Tweet = (properties) => {
    const { tweet } = properties;

    console.log(tweet);

    const dispatch = useDispatch();

    let username = localStorage.getItem('username');
    let userId = localStorage.getItem('userId');

    const [showAllReplies, setShowAllReplies] = React.useState(false);

    const [editable, setEditable] = React.useState(false);

    const [showDeleteModal, setShowDeleteModal] = React.useState(false);

    const openEditModal = (event) => {
        event.preventDefault();
        setEditable(true);
    }
    const closeEditModal = (event) => {
        event.preventDefault();
        setEditable(false);
    }

    const deleteButtonHandler = (event) => {
        event.preventDefault();
        setShowDeleteModal(true);
    }

    const closeDeleteModal = (event) => {
        event.preventDefault();
        setShowDeleteModal(false);
    }

    const allTweetsReducerState = useSelector(tweetListSelector);
    const repliesOfAllTweetReducerState = useSelector(repliesSelector);

    React.useEffect(()=> {
        console.log('hello = ',allTweetsReducerState , ' repliesOfAllTweetReducerState = ', repliesOfAllTweetReducerState);
    },[allTweetsReducerState,repliesOfAllTweetReducerState]);
    
    
    const likeClickHandler = (event) => {
        event.preventDefault();
        dispatch(likeTweetByUsername(username,tweet.id));
    }
    
    const replyClickHandler = (event) => {
        event.preventDefault();
        setShowAllReplies(!showAllReplies);
        dispatch(getAllRepliesOfTweet(tweet.handle,tweet.id));
    }
    
    let { tweetedTo, listOfTags } = tweet;
    let showTweetedTo = false;

    if (tweetedTo !== undefined && tweetedTo !== null && tweetedTo.trim() !== '') {
        showTweetedTo = true;
    }

    if (listOfTags === undefined || listOfTags === null || listOfTags.length < 1) {
        listOfTags = [];
    }

    let liked = tweet.listOfLikes[userId];

    console.log(tweet.avatarLink);

    return (
        <React.Fragment>
            {editable && <EditModal tweet={tweet} closeEditModal={closeEditModal} />}
            {showDeleteModal && <ConfirmDeleteModal tweet={tweet} cancelHandler={closeDeleteModal} />}
            <div className="tweet-wrapper">
                <div className="col clgp-8">
                    <div className="row rowgp-16">
                        <div className="d-flex">
                            <ProfilePic size={64} profilePicSrc={tweet.avatarLink} />
                        </div>
                        <div className="col flex-1 ">
                            <div className="col clgp-8">
                                <div className="row space-between">
                                    <p className="tweet-username">@{tweet.username}</p>
                                    {tweet.username === username &&
                                        <div className="row rowgp-8">
                                            <button type="button" className="put-button" onClick={openEditModal}>
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            </button>
                                            <button type="button" className="delete-button" onClick={deleteButtonHandler}>
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    }
                                </div>
                                {showTweetedTo && <p className="tweet-tweetedTo"><i>{tweet.tweetedTo}</i></p>}
                            </div>
                            <div className='col clgp-8'>
                                <p className="tweet-message"><b>Message:-</b> {tweet.message}</p>
                                <div>{listOfTags.map((hashTag, index) => <span className="hashTag" key={index}><i>#{hashTag}</i></span>)}</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="voting-section">
                    <div className="d-flex">
                        <span className="tweet-votes ">
                            <p className="tweet-votes-counts">{Object.keys(tweet.listOfLikes).length}</p>
                            <button className="toggle-add-post-button cursor-pointer" style={{backgroundColor:liked ?'red':'', color:liked ?'white':'black'}} onClick={likeClickHandler} type="button">
                                <i className="fa fa-heart" aria-hidden="true" style={{backgroundColor:liked ?'red':'', color:'red'}}></i>
                            </button>
                        </span>
                    </div>
                    {/* <div className="d-flex">
                        <span  className="tweet-votes">
                            <p className="tweet-votes">{tweet.dislikes}</p>
                            <button className="toggle-add-post-button" onClick={dislikeClickHandler} type="button">
                                <i className="fa fa-thumbs-down" aria-hidden="true"></i>
                            </button>
                        </span>
                    </div> */}
                    <div className="d-flex">
                        <span  className="tweet-votes">
                            <button className="get-button" onClick={replyClickHandler} type="button">
                                {/* <i className="fa fa-comments-o" aria-hidden="true"></i> */}
                                Check Replies
                            </button>
                        </span>
                    </div>
                </div>
                {showAllReplies &&
                (<div>
                    <ReplySection tweetList={repliesOfAllTweetReducerState[tweet.id]} tweet={tweet} />
                </div>)}
            </div>
        </React.Fragment>
    );
};
// add code for reply

export default Tweet;
