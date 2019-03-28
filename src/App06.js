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
    const body = this.props.fetching_data? 'loading ...' : this.props.data.map((item, idx) => <InboxItem idx={idx} item={item} read={item.read}/>);
    return (
      <div className="email-list">
      <p className="email-list-header">
        <span>Sender</span><span>Subject</span>
      </p>
      {body}
      </div>
      )
  }

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      fetching_data: true
    };
  }

  componentDidMount() {
    console.log('what');
    fetch("https://raw.githubusercontent.com/hpfast/react-practice/master/messages.json")
    .then(response => response.json())
    .then(data => this.setState({
        messages: data.messages,
        fetching_data: false
      })
    )

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Inbox</h2>
        </header>
        <Inbox fetching_data={this.state.fetching_data} data={this.state.messages}/>
      </div>
    );
  }
}

export default App;


