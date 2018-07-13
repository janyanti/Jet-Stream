import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Image } from 'semantic-ui-react';
// import { Button, Checkbock, Form } from 'semantic-ui-react';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <br/>
        <LoginForm />
        <h3 align='center'>Streamling your jet business</h3>
        <Image fluid src={require('../Jet-Stream-logo-1.png')}/>
      </div>
    );
  }
}

export default LoginPage;
