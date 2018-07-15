import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { authenticateUser }  from '../Actions/authenticate'
// import { Button, Checkbock, Form } from 'semantic-ui-react';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <br/>
        <LoginForm onFormSubmit={this.props.authenticateUser}/>
        <h3 align='center'>Streamling your jet business</h3>
        <Image fluid src={require('../Jet-Stream-logo-1.png')}/>
      </div>
    );
  }
}

// export default LoginPage;
//
// let LoginPage = () => {
//
//   return (
//     <div className="LoginPage">
//       <br/>
//       <LoginForm/>
//       <h3 align='center'>Streamling your jet business</h3>
//       <Image fluid src={require('../Jet-Stream-logo-1.png')}/>
//     </div>
//   );
//
// }

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

// LoginPage = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginPage)

export default connect(mapStateToProps, { authenticateUser })(LoginPage);
