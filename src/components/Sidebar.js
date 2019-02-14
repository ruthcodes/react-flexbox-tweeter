import React from 'react';
import AsideContent from './AsideContent.js';
import '../styles/MainBody.css';

function Sidebar(props){
  return (
    <div className="side">
      <AsideContent user={props.user}/>
    </div>
  )
}

export default Sidebar;
