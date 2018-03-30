

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import 'whatwg-fetch'
import * as firebase from "firebase";


// Required for side-effects
require("firebase/firestore");


import {LoginPage} from './LoginPage.jsx'
// import {AdminPage} from './admin/MainPage.jsx'
// import {TeacherPage} from './teacher/MainPage.jsx'
// import {StudentPage} from './student/MainPage.jsx'

// firebase.auth().onAuthStateChanged(function(user) {
//   // if (user) {
//   //   // User is signed in.
//   //   var displayName = user.displayName;
//   //   var email = user.email;
//   //   var emailVerified = user.emailVerified;
//   //   var photoURL = user.photoURL;
//   //   var isAnonymous = user.isAnonymous;
//   //   var uid = user.uid;
//   //   var providerData = user.providerData;
//   //   // ...
//   // } else {
//   //   // User is signed out.
//   //   // ...
//   // }
// });

var config = {
    apiKey: "AIzaSyBHfBkVmx6VRKRBZuD--i3ucVf86Xo2PKk",
    authDomain: "idyllic-catfish-183908.firebaseapp.com",
    databaseURL: "https://idyllic-catfish-183908.firebaseio.com",
    projectId: "idyllic-catfish-183908",
    storageBucket: "idyllic-catfish-183908.appspot.com",
    messagingSenderId: "821372980104"
};

firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
// this.db = firebase.firestore();
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("user logged: start "+ firebase.auth().currentUser)
  } else {
    console.log("no user logged in");
  }
  ReactDOM.render(
      <MainPage/>,
      document.getElementById("root")
  );
});


class MainPage extends React.Component{
  constructor(props){
    super(props);

  }
  render(){
    if(firebase.auth().currentUser){
      return (
        <div>user logged:  {firebase.auth().currentUser.email}</div>
      )
    }
    else {
      return (
        <LoginPage />
      )
    }
  }
}


/* <div id="firebaseui-auth-container"></div> */
