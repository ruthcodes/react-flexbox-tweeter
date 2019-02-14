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
          name: 'Bat Man', username: "@superbat", image: './images/abcde.png'
        },
        {
          name: 'Berty Higgins', username: "@bighuggins", image: './images/cooliflower.png'
        },
        {
          name: 'Kait Wester', username: "@qwest", image: './images/gary.png'
        },
      ],
      trends : [
        {
          where: "Scotland", hashtag: "#Scott", NoTweets: "24.5K"
        },
        {
          where: "United Kingdom", hashtag: "#King", NoTweets: "1.12M"
        },
        {
          where: "United Kingdom", hashtag: "#Unite", NoTweets: "61.4K"
        }
      ]
    }
  }
  render(){
    return (
      <main>
        <Main user={this.props.user}/>
        <Sidebar user={this.state.otherUsers} trends={this.state.trends}/>
      </main>
    )
  }

}

export default MainArea;
