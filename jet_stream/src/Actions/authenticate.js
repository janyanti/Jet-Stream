import fetch from 'node-fetch';
import axios from 'axios'
import { fetchProducts } from './products'

var auth_init = {
  url: 'https://merchant-api.jet.com/api/token',
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}
var id_token = ''

export const authenticateUser = (credentials) => {
  const creds = credentials
  auth_init.data = creds;
  return ( dispatch =>{
  dispatch({type:'AUTH_USER_PENDING'})
  axios(auth_init)
    .then( res => {
      id_token = res.data.id_token
      dispatch({type:'AUTH_USER_FULFILLED', payload:{id_token:id_token, creds: creds} })
      document.getElementById('menu_product').click() //change to redux action
    })
    .catch( err => {
      console.log('Error')
      dispatch({type:'AUTH_USER_REJECTED', payload: {error: err} })
    })
    // .then(() =>{
    //   // fetchProducts()(dispatch)
    //   document.getElementById('menu_product').click()
    // })
  })
}
