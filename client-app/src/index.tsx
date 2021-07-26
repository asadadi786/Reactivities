import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import 'semantic-ui-css/semantic.min.css';
//import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { setChonkyDefaults } from 'chonky';
import { ChonkyIconFA } from 'chonky-icon-fontawesome';
import Dump from './app/layout/Dump';

// Somewhere in your `index.ts`:
setChonkyDefaults({ iconComponent: ChonkyIconFA });


ReactDOM.render(

  <Dump />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
