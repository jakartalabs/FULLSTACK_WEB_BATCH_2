import { combineReducers } from 'redux';

// import _articles from './articles';
// import user from './user.reducer';
import {auth} from './auth.reducer';
export default combineReducers({ auth });