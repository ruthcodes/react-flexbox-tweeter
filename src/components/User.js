import React from 'react';
import Avatar from './Avatar.js';
import '../styles/Header.css';

function User(props){
    let show;
    if (!props.hideUsername) show=props.user.username
    return (
      <div className="user">
        <Avatar image={props.user.avatarImage || props.user.image}/>
        <div>
          <p><b>{props.user.name}</b></p>
          <p>{show}</p>
        </div>
      </div>
    )
}

export default User;
