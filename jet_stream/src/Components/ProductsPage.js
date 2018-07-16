import React, { Component } from 'react';
import { fetchProducts } from '../Actions/products'
import { connect } from 'react-redux';

class ProductsPage extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const id_token = this.props.auth.id_token;
    this.props.fetchProducts(id_token);
  }
  render(){

    return(
      <h1>Products Page</h1>
    )
  }

}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    prod: state.prod
    }
  }

export default connect(mapStateToProps, { fetchProducts })(ProductsPage);
