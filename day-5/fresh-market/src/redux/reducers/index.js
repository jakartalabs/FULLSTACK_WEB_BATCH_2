import { combineReducers } from 'redux';

import { auth } from './auth.reducer';
import { alert } from './alert.reducer';
import { category } from './product.reducer';
export default combineReducers({ auth, alert, category });