import React from 'react';
import '../styles/Header.css';

function InputBar(props){
  return (
    <input type="search" placeholder={props.placeholder}></input>
  )
}

export default InputBar;
