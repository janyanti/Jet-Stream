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
      <div className="App" align='center'>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <LoginForm idToken={this.authenticateUser.bind(this)} />
            </Grid.Column>
            <Grid.Column>
              <Image src="/src/images/Jet-Stream-Side.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
    }
}

export default App;
