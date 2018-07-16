import { combineReducers } from 'redux';
//import reducers here
import authenticateReducer  from './authenticate';
import productsReducer from './products'

export default combineReducers({
    // list reducers here
    auth: authenticateReducer,
    prod: productsReducer
})
