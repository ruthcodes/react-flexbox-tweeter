import React from 'react';
import Avatar from './Avatar.js';
import '../styles/Header.css';

function User(props){
    return (
      <div className="user">
        <Avatar image={props.user.avatarImage}/>
        <p>{props.user.username}</p>
      </div>
    )
}

export default User;
