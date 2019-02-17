import React, { Component } from 'react';
import MainNav from './MainNav.js';
import InputBar from './InputBar.js';
import User from './User.js';
import '../styles/Header.css'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      icons: [
       "/images/home.png",
       "/images/search.png",
       "/images/notify.png",
       "/images/message.png"
     ],
    }
  }

  render(){
    return (
      <header>
        <MainNav icons={this.state.icons}/>
        <InputBar placeholder="Search Twitter"/>
        <User user={this.props.user} hideUsername={true}/>
      </header>
    )
  }

}

export default Header;
