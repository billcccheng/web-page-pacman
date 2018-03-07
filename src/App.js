/*global chrome*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { whackaMole, cleanUp } from './scripts/whackaMole';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
    this.handleMessage = this.handleMessage.bind(this);
  }

  componentDidMount() {
    chrome.tabs.executeScript(null, {
      code: "(" + whackaMole + ")()"
    }, function() {
      if (chrome.runtime.lastError) {
        alert('There was an error injecting script : \n' + chrome.runtime.lastError.message);
      }
    });
    chrome.runtime.onMessage.addListener(this.handleMessage);
  }

  componentWillUnmount() {
    chrome.tabs.reload();
    chrome.tabs.executeScript(null, {
      code: "(" + cleanUp + ")()"
    }, function() {
      if (chrome.runtime.lastError) {
        alert('There was an error injecting script : \n' + chrome.runtime.lastError.message);
      }
    });
  }

  handleMessage(msg) {
    console.log(msg);
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Whackamole!</h1>
        </header>
      </div>
    );
  }
}

export default App;
