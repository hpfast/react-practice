import React, { Component } from 'react';
import './App.css';
import './ex04-headerbar.css';

class HeaderBar extends Component {

  render() {
    const buttonText = this.props.loggedIn?'log uit':'log in';
    return (
      <div className="header-bar">
        <button
          onClick={this.props.handleChange}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default HeaderBar;

