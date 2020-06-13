import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Clock from './Clock';
import MyButton from './MyButton';
import Toggle from './Toggle';
import NumberList from './NumberList';
import MyForm from './MyForm';
import MyTitle from './MyTitle';
import * as serviceWorker from './serviceWorker';

const NUMBERS = [1, 2, 3, 4, 5];

ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,
  <div>
    <MyTitle />
    <Clock />
    <MyButton />
    <Toggle />
    <NumberList numbers={NUMBERS} />
    <MyForm />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
