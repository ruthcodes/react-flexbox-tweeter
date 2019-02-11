import React from 'react';
import Avatar from './Avatar.js';
import InputBar from './InputBar.js';
import '../styles/MainBody.css';

function WriteTweet(props){
  return (
    <div className="writeTweet">
      <Avatar image={props.user.avatarImage}/>
      <InputBar placeholder="What's Happening?" />
      <img src="/images/upload-image.png" alt=""/>
      <img src="/images/upload-gif.png" alt=""/>
      <img src="/images/upload-poll.png" alt=""/>
    </div>
  )
}

export default WriteTweet;
