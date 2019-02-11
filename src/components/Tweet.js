import React from 'react';
import User from './User.js';
import '../styles/MainBody.css';

function Tweet(props){
  return (
    <div>
      <User user={props.tweets}/>
      <p>{props.tweets.tweet}</p>
      <div className="tweetInteractions">
        <p>Comments</p>
        <p>Retweets</p>
        <p>Likes</p>
        <p>Shares</p>
      </div>


    </div>
  )
}

export default Tweet;
