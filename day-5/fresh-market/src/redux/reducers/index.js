import { combineReducers } from 'redux';

import { auth } from './auth.reducer';
import { alert } from './alert.reducer';
import { category, products } from './product.reducer';
import { cart } from './cart.reducer';
export default combineReducers({ auth, alert, category, products, cart });