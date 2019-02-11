import React from 'react';
import Avatar from './Avatar.js';
import FollowButton from './FollowButton';
import '../styles/MainBody.css';

function OtherUser(props){
  return (
    <div className="otherUser">
      <Avatar image={props.user.image}/>
      <div className="usernameDetails">
        <h4>{props.user.name}</h4>
        <p>{props.user.username}</p>
        <FollowButton />
      </div>
    </div>
  )
}

export default OtherUser;
