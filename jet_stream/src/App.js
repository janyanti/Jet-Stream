// import XMLHttpRequest from 'xmlhttprequest';
import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Image } from 'semantic-ui-react';
import LoginForm from './Components/LoginForm';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      credentials: {
        id_token: '',
        login_body: ''
      }
    }
  }

  authenticateUser = (credentials) => {
    // pass credentials to Jet API using fetch
    this.setState({credentials})
    console.log(this.state)
  }

  componentWillMount = () =>{

  }

  componentDidMount = () =>{
    this.authenticateUser();
  }


  render() {
    return (
      <div className="App">
        <LoginForm idToken={this.authenticateUser.bind(this)} />
        <br/><h3 align='center'>Streamling your jet business</h3><br/>
        <Image fluid src={require('./Jet-Stream-logo-1.png')}/>
      </div>
    );
    }
}

export default App;
