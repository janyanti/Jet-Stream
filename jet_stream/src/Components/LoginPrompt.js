import React, { Component } from 'react';
import LoginForm from './LoginForm';
// import { Button, Checkbock, Form } from 'semantic-ui-react';

class LoginPrompt extends Component {
  render() {
    return (
      <div className="LoginPrompt">
        <LoginForm />
      </div>
    );
  }
}

export default LoginPrompt;

// const LoginForm = () => (
//   <Form>
//     <Form.Input label='Username' placeholder='username'/>
//     <Form.Input label='Password' placeholder='password'/>
//     <Form.Button onClick={this.handleClick}>Submit<Form.Button/>
//   </Form>
// )
