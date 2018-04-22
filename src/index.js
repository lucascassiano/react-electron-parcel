//require('react-hot-loader/patch');
import React from 'react';
import * as ReactDOM from 'react-dom'
import './index.css';
//import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';
 
// We can now require our jsx files, they will be compiled for us 

const render = Component => {
  ReactDOM.render(<Component/>,
    document.getElementById('root'),
  )
}

render(App);

module.hot.accept(render(App));

//render(App);
