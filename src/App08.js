import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
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

class DatabaseController {
  constructor() {
    const config = {
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: "email-box-78872.firebaseapp.com",
      databaseURL: "https://email-box-78872.firebaseio.com",
      projectId: "email-box-78872",
      storageBucket: "email-box-78872.appspot.com",
      messagingSenderId: "660257929986"
    };
    firebase.initializeApp(config);
    this.dbconn = firebase.firestore();
  }
  emailCollection() {
    return this.dbconn.collection('emails')
  }
}

const db = new DatabaseController();

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
    this.db = db;
    this.emailCollection = this.db.emailCollection();
    this.state = {
      messages: [],
      fetching_data: true
    };
  }


  componentDidMount() {
    this.emailCollection.get().then(snapshot => {
      let data = snapshot.docs.map(doc => doc.data());
      this.setState({
        messages:data,
        fetching_data: false
      })
    },err => console.log(err));
    //fetch("https://raw.githubusercontent.com/hpfast/react-practice/master/messages.json")
    //.then(response => response.json())
    //.then(data => this.setState({
        //messages: data.messages,
        //fetching_data: false
      //})
    //)

  }

  openEmail(emailid){
    this.db.getEmail(emailid).then( response => {
      this.setState({
        viewingSingleEmail: true,
        currentEmail: emailid
      })
    })

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



