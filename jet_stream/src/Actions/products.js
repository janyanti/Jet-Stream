import axios from 'axios';
import { jsonFilter } from '../Components/jetStream'

const JET_DEFAULTS = {
  headers:{
    'Content-Type': 'application/json',
    'Authorization': ''
  },
  baseURL: 'https://merchant-api.jet.com/api/'
}
const JET = axios.create(JET_DEFAULTS)

const sku_url = 'merchant-skus/'
// const product_url = 'https://merchant-api.jet.com/api/'

var headers = {
  'Content-Type': 'application/json',
  'Authorization': ''
}

export const fetchProducts = (id_token) =>{
  let sku_urls = [];
  let products = [];
  let table_data = [];
  headers.Authorization = `bearer ${id_token}`
  return ( dispatch  =>{
  dispatch({type: 'FETCH_PROD_SKUS_PENDING' })
  JET.get(sku_url, {headers})
    .then( res  => {
      sku_urls = res.data.sku_urls
      dispatch({type: 'FETCH_PROD_SKUS_FULFILLED', payload:{sku_urls:sku_urls} })
      dispatch({type: 'FETCH_PROD_DATA_PENDING'})
      console.log('fetching products...')
      sku_urls.forEach( sku =>{
        JET.get(sku, {headers})
          .then( res  => {
            products.push(res.data)
            // table_data.push(jsonFilter(res.data, 'table'))
          })
          .catch( err  =>{
            dispatch({type:'FETCH_PROD_DATA_REJECTED', payload: {prod_error: err} })
          })});
      console.log(`Here are my products: ${products}`)
      dispatch({type: 'FETCH_PROD_DATA_FULFILLED', payload:{products: products, table_content: table_data} });
      dispatch(formatProductsTable(products))
    })
    .catch( err  =>{
      dispatch({type:'FETCH_PROD_SKUS_REJECTED', payload: {sku_error: err} })
    })
    // .then(() => {
    //   products.forEach( elem => {
    //     table_data.push(jsonFilter(elem,'table'))
    //   })
    //   dispatch({type: 'FORMAT_PROD_TABLE', payload:{ table_content:table_data }})
    // })
  })
}

export const formatProductsTable = (product_data) =>{
    console.log('formatting table data')
    let data = product_data.map( (elem, index) => { return jsonFilter(elem,'table', index)})
    console.log(data)
    return {
      type: 'FORMAT_PROD_TABLE',
      payload: { table_content: data }
    }
  }
