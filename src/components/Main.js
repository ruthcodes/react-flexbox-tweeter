import React, { Component } from 'react';
import WriteTweet from './WriteTweet.js';
import DisplayTweet from './DisplayTweet.js';
import '../styles/MainBody.css';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      tweets: [
        {
          name: 'Adam Eve', username: '@Adammmmm', avatarImage: "/images/adam.png", tweet: "Some irrelevant tweet"
        },
        {
          name: 'Gary Gloves', username: "@GooGloves", avatarImage: "/images/gary.png", tweet: "Some other more irrelevant tweet"
        },
        {
          name: 'Abcde', username: "@abcde", avatarImage: "/images/abcde.png", tweet: "It's not my birthday!"
        },
        {
          name: 'Cauliflower', username: "@cooliflower", avatarImage: "/images/cooliflower.png", tweet: "I like writing tweets"
        }
      ],
      nextTweet: ''
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      nextTweet: e.target.value
    })
  }

  handleSubmit = (e) => {

    if (e.keyCode === 13 && this.state.nextTweet) {
      let tweets = [...this.state.tweets];
      let newTweet = {
        name: this.props.user.name,
        username: this.props.user.username,
        avatarImage: this.props.user.avatarImage,
        tweet: this.state.nextTweet
      }
      tweets.unshift(newTweet)
      this.setState({
        tweets: tweets,
        nextTweet: ''
      })
    }
  }
  render(){
    return (
      <div className="main">
        <content>
          <WriteTweet user={this.props.user} handlechange={this.handleChange} handlesubmit={this.handleSubmit} value={this.state.nextTweet}/>
          <DisplayTweet tweets={this.state.tweets}/>
        </content>
      </div>
    )
  }

}

export default Main;
