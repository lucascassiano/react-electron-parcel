import React, { Component } from 'react';

import box from './box.svg';
import reactLogo from './logo.svg';
import pipeline from "./assets/pipeline.svg";

import './App.css';
const a = process.env.KEY;

class App extends Component {

  render() {
    return (
      <div className="App">
      <img className="App-logo" src={reactLogo}/>
      <br/>
      <img className="App-logo-box" src={box}/>
        <header className="App-header">  
          <h1 className="App-title">Welcome to React + Parcel {a} </h1>
        </header>

        <p className="App-intro">
          This is how this app is up and running:
        </p>

        <img src={pipeline}/>
      </div>
    );
  }
}

export default App;
