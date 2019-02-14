import React from 'react';
import User from './User';
import Trends from './Trends';
import '../styles/MainBody.css';

function AsideContent(props){
  let trends;
  if (props.data[0].where){ trends = true;}
  return (
    <aside className="followSuggestion">
      <h2>{props.title}</h2>
      <ul>
        {
          props.data.map((data,i) => {
            return trends ? <li key={i}><Trends trends={data}/></li>
                          : <li key={i}><User user={data}/></li> 
          })
        }
        <li> <p>Show More</p> </li>
      </ul>
    </aside>
  )
}

export default AsideContent;
