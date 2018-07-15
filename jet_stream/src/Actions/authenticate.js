import fetch from 'node-fetch';
import axios from 'axios'

var auth_init = {
  url: 'https://merchant-api.jet.com/api/token',
  method: 'POST',
  headers: { 'Content-Type': 'application/json' }
}

export const authenticateUser = (credentials) => {
  const creds = credentials //JSON.stringify(credentials);
  auth_init.data = creds;
  return ((dispatch) =>{
    dispatch({type:'AUTH_USER_PENDING'})
    axios(auth_init)
      .then((res) => {
        console.log(res)
        dispatch({type:'AUTH_USER_FULFILLED', payload:{id_token:res.data.id_token, creds: creds} })
      })
      .catch((err) => {
        console.log('Error')
        dispatch({type:'AUTH_USER_REJECTED', payload: {error: err} })
      })
  })
}
