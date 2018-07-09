import React, { Component } from 'react';
import { Item, Image } from 'semantic-ui-react';

function ProductItem (props){
    const item = props.item
    console.log(item)
    return (
      <Item>
        <Item.Image size='small' src={item.main_image_url}/>
        <Item.Content>
          <Item.Header as='a'>{item.product_title}</Item.Header>
          <Item.Meta>Item Details</Item.Meta>
          <Item.Description>
            <ul>
              <li className = 'price'>{`Price: $${item.price}`}</li>
              <li className = 'quantity'>{`Quantity:  ${item.quantity}`}</li>
              <li className = 'status'>{`Status: ${item.status}`}</li>
              <li className = 'Description'>{`Description: ${item.product_description}`}</li>
              <li className = 'Weight'>{`Weight: ${item.shipping_weight_pounds} lbs`}</li>
            </ul>
          </Item.Description>
        </Item.Content>
      </Item>
    );
  }


export default ProductItem
