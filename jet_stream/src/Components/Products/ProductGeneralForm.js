import React, { Component } from 'react';
import { Form, Select } from 'semantic-ui-react';

class ProductGeneralForm extends Component {

  constructor(props){
    super(props)

  }

  render(){
    // export list to file for better readability
    const code_options = [
      { text: 'GTIN-14', value: 'GTIN-14' },
      { text: 'EAN', value: 'EAN' },
      { text: 'ISBN-10', value: 'ISBN-10' },
      { text: 'ISBN-13', value: 'ISBN-13' },
      { text: 'UPC', value: 'UPC' }
    ]

    return(
      <Form>
        <Form.Group widths={2}>
          <Form.Input label='Product Title' name='product_title' placeholder='product title' title='5 to 500 characters' required/>
          <Form.Input label='SKU' name='user_defined_sku_id' placeholder='SKU' required/>
        </Form.Group>
        <Form.Group>
          <Form.Field control={Select} label='Product Code Type' options={code_options} placeholder='select' width={4} />
          <Form.Input label='Product Code' name='standard_product_code' placeholder='product code' width={6} />
          <Form.Input label='ASIN' name='ASIN' placeholder='required if product codes not given' width={6} />
        </Form.Group>
        <Form.Group widths={2}>
          <Form.Input label='Brand' name='brand' placeholder='brand' title='1 to 100 characters' required/>
          <Form.Input label='Multipack Quanitity' name='multipack_quantity' placeholder='multipack quanitity' title='1 to 128' required/>
        </Form.Group>
        <Form.Input label='Image URL' name='main_image_url' placeholder='valid image URL' required/>
      </Form>

    )
  }
}

export default ProductGeneralForm
