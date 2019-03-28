import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Inbox} from './07-inbox.js';
import './05-list.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      fetching_data: true,
    };
  }



  componentDidMount() {
    //fetch("https://raw.githubusercontent.com/hpfast/react-practice/master/messages.json")
    //.then(response => response.json())
    //.then(data => this.setState({
        //messages: data.messages,
        //fetching_data: false
      //})
    const data = {
      messages: [
        { read: false, sender: "Programming Books Central", subject: "Save 20% on React Books!"},
        { read: false, sender: "Alice B.", subject: "Status project X?"},
        { read: false, sender: "Widow of King A. Nadjamo", subject: "I have 20 million Great British Pounds in Bank Account for You"}
      ]
    }

    this.setState({
        messages: data.messages,
        fetching_data: false
      })

    this.setReadState = this.setReadState.bind(this);
    this.setAllUnread = this.setAllUnread.bind(this);

  }

  setReadState(id) {
    this.setState((oldstate, props) => {
      return {
        messages: oldstate.messages.map(function(item, idx) {
          if (idx === id) {
            return ({...item, read: true});
          } else {
            return item
          }

        })
      } 
    })
  }

  setAllUnread() {
    this.setState((oldstate, props) => {
      return {
        messages: oldstate.messages.map(item => ({...item, read:true}))
      }
    })
  }



  render() {
    const unread_count = this.state.messages.reduce(function(sum, item) {
      return !item.read && sum + 1
    }, 0)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Inbox</h2>
          <button
            title="mark all read"
            onClick={this.setAllUnread}
          >
            {unread_count || 0}
          </button>
        </header>
        <Inbox
          fetching_data={this.state.fetching_data}
          data={this.state.messages}
          setReadState={this.setReadState}
        />
      </div>
    );
  }
}

export default App;



