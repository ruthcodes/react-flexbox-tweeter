import React, { Component } from 'react';
import Header from './components/Header.js';
import MainArea from './components/MainArea.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {
        username: "@RuthAshleigh",
        name: "Ruth Ashleigh",
        avatarImage: "./images/head.png",
        tweets: []
      }
    }
  }
  render() {
    return (
      <div className="App">
        <Header user={this.state.user}/>
        <MainArea user={this.state.user}/>
      </div>
    );
  }
}

export default App;
