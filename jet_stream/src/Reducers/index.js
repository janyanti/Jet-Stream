import { combineReducers } from 'redux';
//import reducers here
import authenticateReducer  from './authenticate';

export default combineReducers({
    // list reducers here
    auth: authenticateReducer,
})
