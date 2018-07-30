import React, { Component } from 'react';
import { Segment, Form, Menu, Tab } from 'semantic-ui-react';
import ProductGeneralForm from './ProductGeneralForm'
import ProductShippingForm from './ProductShippingForm'

class AddProduct extends Component {

  constructor(props){
    super(props)

  }

  render(){

    const panes = [
      { menuItem: { content:'General', icon:'info circle'}, render: () => <Tab.Pane>{ <ProductGeneralForm/> }</Tab.Pane> },
      { menuItem: { content:'Shpping', icon:'shipping fast'}, render: () => <Tab.Pane>{ <ProductShippingForm/> }</Tab.Pane> },
      { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ]

    return(
      <Segment>
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
      </Segment>

    )
  }
}

export default AddProduct
