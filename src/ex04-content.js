import React, { Component } from 'react';
import './App.css';

class Content extends Component {

  render() {
    return (
      <div className="content">
        <p>
          {this.props.loggedIn? 'Lorem ipsum dolor sit amet ...':'je moet ingelogd zijn om de inhoud te bekijken.'}
        </p>
      </div>
    );
  }
}

export default Content;

