import React from 'react';
import '../styles/Header.css';

function InputBar(props){
  return (
    <input type="search" placeholder={props.placeholder} onChange={props.handlechange} onKeyDown={props.handlesubmit} value={props.value}></input>
  )
}

export default InputBar;
