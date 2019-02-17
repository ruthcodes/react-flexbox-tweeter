import React from 'react';
import '../styles/MainBody.css'

function Trends(props){
  return (
    <div>
      <p>Trending in {props.trends.where}</p>
      <p><b>{props.trends.hashtag}</b></p>
      <p>{props.trends.NoTweets} Tweets</p>
    </div>
  )
}

export default Trends;
