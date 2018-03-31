import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';


import {
  Button,
  Input,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText
} from 'mdbreact';

// Required for side-effects
require('firebase/firestore');

class LoginPage extends React.Component{
  constructor(props) {
    super(props);

  }
  componentDidMount() {
  }
  render(){
    return (
      <div className="col">
        <h2 className="mb-5">Form login</h2>
        <form>
          <p className="h5 text-center mb-4">Sign in</p>
          <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
          <Input label="Type your password" icon="lock" group type="password" validate/>
          <div className="text-center">
            <Button>Login</Button>
          </div>
        </form>
        <Card cascade>
          <CardImage tag="div">
            <div className="view gradient-card-header blue-gradient">
              <h2 className="h2-responsive">Heading</h2>
              <p>Subheading</p>
            </div>
          </CardImage>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>{'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</CardText>
            <Button href="#">Button</Button>
          </CardBody>
        </Card>
        <Card reverse>
          <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>{'Some quick example text to build on the card title and make up the bulk of the card\'s content.'}</CardText>
            <Button href="#">Button</Button>
          </CardBody>
        </Card>
      </div>



    );
  }
}


export {LoginPage};
