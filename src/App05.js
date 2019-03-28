import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './05-list.css';


class InboxItem extends Component {
  render() {
    return (
    <p key={this.props.idx} className="email-list-row">
      <span>{this.props.item.sender}</span>
      <span>{this.props.item.subject}</span>
    </p>
    )
  }
}

class Inbox extends Component {
  render() {
    return (
      <div className="email-list">
      <p className="email-list-header">
        <span>Sender</span><span>Subject</span>
      </p>
      {this.props.data.map((item, idx) => <InboxItem idx={idx} item={item} read={item.read}/>)}
      </div>
      )
  }

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { read: false, sender: "Programming Books Central", subject: "Save 20% on React Books!"},
        { read: false, sender: "Alice B.", subject: "Status project X?"},
        { read: false, sender: "Widow of King A. Nadjamo", subject: "I have 20 million Great British Pounds in Bank Account for You"}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Inbox</h2>
        </header>
        <Inbox data={this.state.messages}/>
      </div>
    );
  }
}

export default App;

