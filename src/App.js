import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClickMessage: 'Button has not been clicked.'
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      buttonClickMessage: 'Button has been clicked!'
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button onClick={this.handleChange}>Click me!</button>
        <p>{this.state.buttonClickMessage}</p>
      </div>
    );
  }
}

export default App;
