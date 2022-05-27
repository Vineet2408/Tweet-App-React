import React from 'react';
import AddTweet from '../../AddTweet';
import Tweet from '../../Tweet';

const ReplySection = (properteis) => {

    let { tweetList, tweet} = properteis;

    if (tweetList === undefined || tweetList === null  || tweetList.length < 1) {
        return ( 
            <div>
                <AddTweet repliedTo={tweet.id}/>
                <div style={{paddingLeft:"24px"}}>
                    <h4>No Replies to Show ... </h4>
                </div>
            </div>
        );
         
    }

    console.log(tweetList);

    const getListUI= (tweet) => {
        return (
            <Tweet tweet={tweet}/>
       
        );
    }

    let UIArray = [];

    for(let i = 0; i < tweetList.length; i++) {
        let li = getListUI(tweetList[i]);
        UIArray.push(li);
    }

    return (
        <div>
            <AddTweet repliedTo={tweet.id}/>
            <ul>
               {UIArray}
            </ul>
        </div>
    );
};

export default ReplySection;
