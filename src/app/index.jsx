import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom';
import 'whatwg-fetch';

import * as firebase from 'firebase';

import {LoginPage} from './LoginPage.jsx';
import {MainPage} from './MainPage.jsx';

var config = {
  apiKey: 'AIzaSyBHfBkVmx6VRKRBZuD--i3ucVf86Xo2PKk',
  authDomain: 'idyllic-catfish-183908.firebaseapp.com',
  databaseURL: 'https://idyllic-catfish-183908.firebaseio.com',
  projectId: 'idyllic-catfish-183908',
  storageBucket: 'idyllic-catfish-183908.appspot.com',
  messagingSenderId: '821372980104'
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('user logged: start ' + firebase.auth().currentUser);
  } else {
    console.log('no user logged in');
  }
  var userEmail = firebase.auth().currentUser;
  if (userEmail) {
    var userRecord = {};

    firebase.firestore().collection('users').where('email', '==', userEmail).get().then(function(querySnapshot) {
      userRecord = {...querySnapshot[0].data()};
    });

    ReactDOM.render(<MainPage/>, document.getElementById('root'));
  }

});
