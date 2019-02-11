import React from 'react';
import Tweet from './Tweet.js';
import '../styles/MainBody.css';

function DisplayTweet(props){
  return (
    <div className="displayTweets">
      <ul>
      {
        props.tweets.map(tweet => {
          return <li><Tweet tweets={tweet}/></li>
        })
      }
      </ul>
    </div>
  )
}

export default DisplayTweet;
