import axios from 'axios';

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
  headers.Authorization = `bearer ${id_token}`
  return ( dispatch  =>{
  dispatch({type: 'FETCH_PROD_SKUS_PENDING' })
  JET.get(sku_url, {headers})
    .then( res  => {
      sku_urls = res.data.sku_urls
      dispatch({type: 'FETCH_PROD_SKUS_FULFILLED', payload:{sku_urls:sku_urls} })
      dispatch({type: 'FETCH_PROD_DATA_PENDING'})
      sku_urls.forEach( sku =>{
        JET.get(sku, {headers})
          .then( res  => products.push(res.data))
          .catch( err  =>{
            dispatch({type:'FETCH_PROD_DATA_REJECTED', payload: {prod_error: err} })
          })});
      dispatch({type: 'FETCH_PROD_DATA_FULFILLED', payload:{products: products} })
    })
    .catch( err  =>{
      dispatch({type:'FETCH_PROD_SKUS_REJECTED', payload: {sku_error: err} })
    })
  })
}
