import React, { Component } from 'react'
import { Table, Segment, Checkbox, Image } from 'semantic-ui-react'

function TableRow(props){
  const item = props.item
  return(
    <Table.Row>
      <Table.Cell><Checkbox/></Table.Cell>
      <Table.Cell><Image src={item.main_image_url}  size='tiny'/></Table.Cell>
      <Table.Cell>{ item.product_title }</Table.Cell>
      <Table.Cell>{ item.id }</Table.Cell>
      <Table.Cell>{ item.merchant_sku }</Table.Cell>
      <Table.Cell>{ item.status }</Table.Cell>
      <Table.Cell>{ item.price }</Table.Cell>
      <Table.Cell>{ item.quantity }</Table.Cell>
    </Table.Row>
  )
}

class ProductsTable extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let content = this.props.table_content;
    if (content && content.length >= 1 ){
      return(
          <Table celled compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell/>
                <Table.HeaderCell singleLine>Image</Table.HeaderCell>
                <Table.HeaderCell singleLine>Product Name</Table.HeaderCell>
                <Table.HeaderCell singleLine>ID</Table.HeaderCell>
                <Table.HeaderCell singleLine>SKU</Table.HeaderCell>
                <Table.HeaderCell singleLine>Status</Table.HeaderCell>
                <Table.HeaderCell singleLine>Price</Table.HeaderCell>
                <Table.HeaderCell singleLine>QTY</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {content.map( item => <TableRow key={item.id} item={item}/>) }
            </Table.Body>
          </Table>

      )
  }
  return (<button type="button" onClick={this.props.onLoad}>Load</button>)
 }
}

export default ProductsTable
