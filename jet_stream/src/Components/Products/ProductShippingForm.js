import React, { Component } from 'react'
import { Form, Select } from 'semantic-ui-react'

class ProductShippingForm extends Component {

  constructor(props){
    super(props)
  }

  render(){

    return(
      <Form>
        <Form.Group widths={3}>
          <Form.Input label='Shiping Weight (lbs)' name='shipping_weight_pounds' placeholder='0 lbs'/>
        </Form.Group>
        <Form.Group widths={3}>
          <Form.Input label='Length (in)' name='package_length_inches' placeholder='0 in'/>
          <Form.Input label='Width (in)' name='package_width_inches' placeholder='0 in'/>
          <Form.Input label='Height (in)' name='package_height_inches' placeholder='0 in'/>
        </Form.Group>
      </Form>
    )
  }
}

export default ProductShippingForm
