import React from 'react';
import Avatar from './Avatar.js';
import '../styles/Header.css';

function User(props){
    return (
      <div className="user">
        <Avatar image={props.user.avatarImage || props.user.image}/>
        <div>
          <p><b>{props.user.name}</b></p>
          <p>{props.user.username}</p>
        </div>
      </div>
    )
}

export default User;
