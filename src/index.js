import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Clock from './Clock';
import MyButton from './MyButton';
import Toggle from './Toggle';
import NumberList from './NumberList';
import * as serviceWorker from './serviceWorker';

const N = [1];

ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  <div>
    <Clock /><br />
    <MyButton /><br />
    <Toggle />
    <NumberList numbers={N} />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
