import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from './ex04-headerbar.js';
import Content from './ex04-content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      loggedIn: this.state.loggedIn?false:true
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Example 4</h2>
        </header>
        <HeaderBar 
          loggedIn={this.state.loggedIn}
          handleChange={this.handleChange}
        />
        <Content loggedIn={this.state.loggedIn}/>
      </div>
    );
  }
}

export default App;
