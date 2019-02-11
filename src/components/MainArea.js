import React, { Component } from 'react';
import Main from './Main.js';
import Sidebar from './Sidebar.js';
import '../styles/MainBody.css';

class MainArea extends Component{
  constructor(props){
    super(props);
    this.state = {
      otherUsers: [
        {
          name: 'Bat Man', username: "@superbat", image: './images/bat.png'
        },
        {
          name: 'Berty Higgins', username: "@bighuggins", image: './images/berty.png'
        },
        {
          name: 'Kait Wester', username: "@qwest", image: './images/kait.png'
        },
      ]
    }
  }
  render(){
    return (
      <main>
        <Main user={this.props.user}/>
        <Sidebar />
      </main>
    )
  }

}

export default MainArea;
