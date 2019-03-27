import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      liked: this.state.liked?false:true
    });
  }
  render() {
    const buttonText = this.state.liked?'Unlike':'Like';
    const buttonClassName = this.state.liked?'liked':'';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button
          onClick={this.handleChange}
          className={buttonClassName}>
          {buttonText}
        </button>
        {this.state.liked && <p>You liked this.</p>}
      </div>
    );
  }
}

export default App;
