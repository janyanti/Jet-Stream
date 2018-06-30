import React, { Component } from 'react';
import { Button, Form, Icon, Container, Segment } from 'semantic-ui-react';
// import XMLHttpRequest from 'xmlhttprequest';
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
  // Collect user input from form values
    event.preventDefault();
    const user = event.target[0].value;
    const secret = event.target[1].value;
    const body = JSON.stringify({
      'user': user,
      'pass': secret
    });
    if ((user && secret)){
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://merchant-api.jet.com/api/token', true );
      xhr.setRequestHeader('Content-type', 'application/json')
      xhr.onload = () => {
          var res = JSON.parse(xhr.responseText);
          // console.log(res)
          res.login_body = body
          this.props.idToken(res)
         }
      xhr.send(body);

    }
      else {alert('Username and Password are both required');}

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
