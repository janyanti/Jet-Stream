import React, { Component } from 'react';
import { Form, Icon, Container, Segment } from 'semantic-ui-react';
import {authenticateUser}  from './jetStream.jsx'


class LoginForm extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    authenticateUser(event, this.props);
}
  render(){
    return (
      //Form for API call authentification
      <Container>
        <Segment>
          <Form size='huge' onSubmit={this.handleSubmit}>
            <Form.Input label='Username' placeholder='username'/>
            <Form.Input label='Password' type='password' placeholder='password'/>
            <Form.Button size='big' color='grey' >Submit</Form.Button>
            <Icon loading color='purple'name='sync' />
          </Form>
        </Segment>
      </Container>
    )
  }
}

export default LoginForm
