import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const firebase = require('firebase');
require ('firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDa6sqccQUYjOEkwM5ZmQ4UHJ9o2UfXpyg",
  authDomain: "evernote-clone-5e6f3.firebaseapp.com",
  databaseURL: "https://evernote-clone-5e6f3.firebaseio.com",
  projectId: "evernote-clone-5e6f3",
  storageBucket: "evernote-clone-5e6f3.appspot.com",
  messagingSenderId: "530874664627",
  appId: "1:530874664627:web:fba1a69fd1af76796c52c6",
  measurementId: "G-WRTSQSZYCE"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
