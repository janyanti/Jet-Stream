import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Icon, Segment, Sidebar, Menu } from 'semantic-ui-react';
import ProductsPage from './ProductsPage';
import ShippingPage from './ShippingPage';
import LoginPage from './LoginPage';

class MenuSidebar extends Component{

  constructor(props){
    super(props);
  }

  render(){
    const visible = this.props.visible
    const content = this.props.content

    return(
      <HashRouter>
        <Sidebar.Pushable className='sidebar-container'>
          <Sidebar
          as={Menu}
              animation='scale down'
              icon='labeled'
              // inverted
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width='thin'
            >
            <Menu.Item as='a' href='#/ProductsPage' id='menu_product'>
                <Icon name='cube' />
                Products
            </Menu.Item>
            <Menu.Item as='a' href='#/ShippingPage'>
                <Icon name='shipping fast' />
                Shipping
            </Menu.Item>
            <Menu.Item as='a' href='#/'>
                <Icon name='options' />
                Options
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Route exact path='/' component={LoginPage}/>
            <Route exact path='/ProductsPage' component={ProductsPage}/>
            <Route exact path='/ShippingPage' component={ShippingPage}/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </HashRouter>
    )
  }

}

export default MenuSidebar
