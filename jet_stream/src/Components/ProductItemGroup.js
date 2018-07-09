import React, {Component} from 'react';
import ProductItem from './ProductItem'
import {Segment, Item} from 'semantic-ui-react';

class ProductItemGroup extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const items = this.props.items;
    let lists = this.props.items.map((item) =>
      <ProductItem item={item}/>
    );
    console.log(lists)
    return(
    <Segment>
      <Item.Group>
        {lists}
      </Item.Group>
    </Segment>
    )
  }
}

export default ProductItemGroup
