import React from 'react';
import '../styles/Header.css';

function MainNav(props){
  return (
    <ul>
    {
      props.icons.map(icon =>
        <li key={icon.toString()}>
          <img src={icon} alt=""/>
        </li>
      )
    }
    </ul>
  )
}

export default MainNav;
