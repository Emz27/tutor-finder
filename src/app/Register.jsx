import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import * as firebase from "firebase";
import * as firebaseui from "firebaseui";

import {Button} from 'mdbreact'

// Required for side-effects
require("firebase/firestore");

class Register extends React.Component{
  constructor(props) {
    super(props);

    this.ui = new firebaseui.auth.AuthUI(firebase.auth());

    this.uiConfig = {
      callbacks: {
        signInSuccess: function(currentUser, credential, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
        }
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: '#',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID

      ]//,
      // // Terms of service url.
      // tosUrl: '<your-tos-url>'
    };

  }
  componentDidMount() {
    this.ui.start('#firebaseui-auth-container', this.uiConfig)
  }
  render(){
    return (
      <div>
        <div id="firebaseui-auth-container"></div>
        <Button >hello</Button>
      </div>

    )
  }
}


export {Register}
