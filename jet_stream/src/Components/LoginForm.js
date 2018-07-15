import React, { Component } from 'react';
import { Form, Icon, Container, Segment } from 'semantic-ui-react';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {user:'', pass:''}

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault()
    const body = JSON.stringify({
      'user': this.state.user,
      'pass': this.state.pass
    });
    this.props.onFormSubmit(body);
}

  render(){
    return (
      //Form for API call authentification
      <Container>
        <Segment>
          <Form size='huge' onSubmit={this.onSubmit}>
            <Form.Input label='Username' placeholder='username' name='user' onChange={this.onChange}/>
            <Form.Input label='Password' type='password' placeholder='password' name='pass' onChange={this.onChange}/>
            <Form.Button size='big' color='grey' >Submit</Form.Button>
            <Icon loading color='purple'name='sync' />
          </Form>
        </Segment>
      </Container>
    )
  }
}

export default LoginForm
