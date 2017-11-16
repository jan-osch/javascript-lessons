import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class MyButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}> {this.props.label}</button>
      </div>
    );
  }
}

// Simple example
// Task: after + is called add new element to list, after -  is called remove last element

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  addToCounter = (value) => {
    const newCounterValue = this.state.counter + value;
    this.setState({ counter: newCounterValue });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <strong>
          {this.state.counter}
        </strong>


        <MyButton label={'+'} onClick={() => this.addToCounter(1)}/>
        <MyButton label={'-'} onClick={() => this.addToCounter(-1)}/>
      </div>
    );
  }
}

export default App;
