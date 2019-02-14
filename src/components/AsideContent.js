import React from 'react';
import User from './User';
import '../styles/MainBody.css';

function AsideContent(props){
  return (
    <aside className="followSuggestion">
      <h2>Who To Follow</h2>
      <ul>
        {
          props.user.map((user,i) => {
            return <li key={i}><User user={user}/></li>
          })
        }
        <li> <p>Show More</p> </li>
      </ul>
    </aside>
  )
}

export default AsideContent;
