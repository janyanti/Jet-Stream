import React, { Component } from 'react';
import { Image, Sidebar, Icon, Menu, Segment } from 'semantic-ui-react';
import LoginPage from './Components/LoginPage';
import MenuSidebar from './Components/MenuSidebar';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      menuVisible: false,
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
    const example_item = {
    main_image_url: 'https://crunchins.com/wp-content/uploads/2017/01/Chin-Chin-Family-Pack-600x600.png',
    price: 17.99,
    quantity: 20,
    product_title: 'Chin Chin Family Pack (1/2 Gal.)',
    status: 'Under Jet Review',
    product_description: 'Crunchins Origanl Chin Chin Snack.',
    shipping_weight_pounds: 2.3
  }

    return (
      <div>
      <Menu attached="top">
        <Menu.Item onClick={() => this.setState({ menuVisible: !this.state.menuVisible })}>
          <Icon name="bars" />Menu
        </Menu.Item>
      </Menu>

      <MenuSidebar content={<LoginPage/>} visible={this.state.menuVisible}/>
      </div>
    );
    }
}

export default App;
