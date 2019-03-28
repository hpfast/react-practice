import React, { Component } from 'react';
import './App.css';
import './05-list.css';

class InboxItem extends Component {
  render() {
    return (
    <p key={this.props.idx}
      className="email-list-row"
      onClick={(event) => this.props.setReadState(this.props.id)}>
      <span>{this.props.item.sender}</span>
      <span className={this.props.item.read?'':'unread'}>{this.props.item.subject}</span>
    </p>
    )
  }
}

class Inbox extends Component {
  render() {
    const body = this.props.fetching_data? 'loading ...' : this.props.data.map((item, idx) =>
      <InboxItem
        key={idx}
        id={idx}
        item={item}
        setReadState={this.props.setReadState}
      />);
    return (
      <div className="email-list">
      <p className="email-list-header">
        <span>Sender</span>
        <span>Subject</span>
      </p>
      {body}
      </div>
      )
  }

}

export {Inbox, InboxItem};
