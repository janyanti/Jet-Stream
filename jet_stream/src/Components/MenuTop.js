import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class MenuTop extends Component{

  constructor(props){
    super(props);
  }

  render(){

    return(
      <Menu attached="top">
        <Menu.Item onClick={() => this.setState({ menuVisible: !this.state.menuVisible })}>
          <Icon name="bars" />Menu
        </Menu.Item>
      </Menu>
    )

  }

}

export default MenuTop
