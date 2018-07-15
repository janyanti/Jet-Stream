import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Image, Segment, Icon, Dimmer } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { authenticateUser }  from '../Actions/authenticate'


class LoginPage extends Component {

  render() {
    const auth = this.props.auth;
    if (!auth.authorizing) {
      return (
      <div className="LoginPage">
        <br/>
        <LoginForm onFormSubmit={this.props.authenticateUser} error={auth.error}/>
        <h3 align='center'>Streamling your jet business</h3>
        <Image fluid src={require('../Jet-Stream-logo-1.png')}/>
      </div>);
    }
    return (
      <div className='centered'>
          <Icon loading inverted size='massive' name='spinner' color='grey'/>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    onFormSubmit: credentials => {
      dispatch(authenticateUser(credentials))
    }
  }
}

export default connect(mapStateToProps, { authenticateUser })(LoginPage);
