import React, { Component } from "react";
import './App.css';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };


  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Who are you?</h1>
          <button onClick={event=>window.location.href='./interview-settings'} className="App-button App-link">I am an Interviewer!</button>
          <button onClick={event=>window.location.href='./job'} className="App-button App-link">I am an Interviewee!</button>
          
        </header>
      </div>
    );
  }

}



