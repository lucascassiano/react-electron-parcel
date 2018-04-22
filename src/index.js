require('react-hot-loader/patch');
import React from 'react';
import * as ReactDOM from 'react-dom'
import './index.css';
import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root'),
  )
}
render(App);
