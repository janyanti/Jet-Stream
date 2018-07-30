import React, { Component } from 'react';
import { fetchProducts, formatProductsTable } from '../Actions/products'
import { connect } from 'react-redux';
import ProductsTable from './ProductsTable';
import { jsonFilter } from './jetStream';

class ProductsPage extends Component {

  constructor(props){
    super(props);
    this.state = {}
    this.loadProducts = this.loadProducts.bind(this)
    this.formatTable = this.formatTable.bind(this)
  }

  loadProducts = () =>{
    const id_token = this.props.auth.id_token;
    this.props.fetchProducts(id_token);
  }

  formatTable = () =>{
    const product_data = this.props.prod.products
    this.props.formatProductsTable(product_data)
  }


  componentDidMount(){
    this.loadProducts();
  }

  render(){
    return(
      <div className='product-table'>
        <h2>Products Manager</h2>
        <ProductsTable onLoad={this.formatTable} table_content={this.props.prod.table_content}/>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    prod: state.prod
    }
  }

 const mapDispatchToProps = dispatch => {
   return {
     fetchProducts: (id_token) => dispatch(fetchProducts(id_token)),
     formatProductsTable: (data) => dispatch(formatProductsTable(data))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
