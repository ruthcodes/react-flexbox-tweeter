import React from 'react';
import AsideContent from './AsideContent.js';
import '../styles/MainBody.css';

function Sidebar(props){
  return (
    <div className="side">
      <div className="sideFlexCont">
        <AsideContent title={"Who To Follow"} data={props.user}/>
        <AsideContent title={"Trends For You"} data={props.trends}/>
      </div>
    </div>
  )
}

export default Sidebar;
