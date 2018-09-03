import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import logo from "./icons/logo.svg";
import github from "./icons/github.svg";
import { shell } from 'electron';

import "./app.css";
export default class App extends Component {

    onClick = () => {
        alert("hey");
        shell.openExternal('https://github.com/lucascassiano/react-electron-parcel');
    }

    render() {
        return (
            <div className="content">
                <img className="logo" src={logo} />
                <h1>React + Electron</h1>
                <button onClick={this.onClick}> <img src={github} /> Fork me on Github</button>
            </div >
        );
    }
}

