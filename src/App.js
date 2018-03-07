/*global chrome*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import whackaMole from './scripts/whackaMole';

class App extends Component {
  componentDidMount() {
    chrome.tabs.executeScript(null, {
        code: "(" + whackaMole + ")()"
      }, function() {
        if (chrome.runtime.lastError) {
          alert('There was an error injecting script : \n' + chrome.runtime.lastError.message);
        }
      });
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
