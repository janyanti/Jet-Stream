import React, { Component } from 'react'
import { Icon, Segment, Sidebar, Menu } from 'semantic-ui-react'

class MenuSidebar extends Component{

  constructor(props){
    super(props);
  }

  render(){
    const visible = this.props.visible

    return(
      <Sidebar.Pushable className='sidebar-container'>
        <Sidebar
        as={Menu}
            animation='overlay'
            icon='labeled'
            // inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
          <Menu.Item as='a' >
              <Icon name='cube' />
              Products
          </Menu.Item>
          <Menu.Item as='a' >
              <Icon name='shipping fast' />
              Shipping
          </Menu.Item>
          <Menu.Item as='a' >
              <Icon name='options' />
              Options
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          {this.props.content}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
  }

}

export default MenuSidebar
