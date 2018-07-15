
const defaultState = {
    auth_creds: '',
    id_token: '',
    authorizing: true,
    authorized: false,
    auth_error: null
  };

const authenticateReducer = (state=defaultState, action) =>{
  const data = action.payload;
  switch (action.type) {
    case 'AUTH_USER_PENDING':{
      return {...state, authorizing:true}
    }
    case 'AUTH_USER_FULFILLED':{
      return {...state, id_token:data.id_token, creds:data.creds, authorizing:false, authorized:true}
    }
    case 'AUTH_USER_REJECTED':{
      return {...state, authorizing:false, authorized:false, auth_error:data.error}
    }
    default:
      return state;
  }

}

export default authenticateReducer
