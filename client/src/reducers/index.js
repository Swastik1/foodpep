import { combineReducers } from 'redux';
import authReducer from './authReducer';
import {restaurantReducer} from './restaurantReducer';
import {cartReducer} from './cartReducer';

export default combineReducers({
  // key and value
  auth: authReducer,
  restaurants: restaurantReducer,
  cart: cartReducer
});
