import { createBrowserHistory } from 'history';

import { loginRequest, registerRequest } from '../../api/user';
import * as alertAction from './alert';
const history = createBrowserHistory();

export const loginAction= (data)=>{
  
  return async (dispatch) =>{
    dispatch(request({userId: data.userId}));

    const result = await loginRequest(data);
    if (result.status !== 200) {
      dispatch(failed(result));
      dispatch(alertAction.error(result.message));
    }else{
      dispatch(alertAction.clear());
      dispatch(success(result.data));
      localStorage.setItem('user-fresh-market', JSON.stringify(result.data));
      window.location.href = '/';
    }
    function request(user) {
      return { type: 'LOGIN_REQUEST', user }
    }

    function success(user) {
      return { type: 'LOGIN_SUCCESS', user }
    }

    function failed(error) {
      return { type: 'LOGIN_ERROR', error }
    }
  }
  
}


export const registerAction = (data) => {
  return async (dispatch) => {
    dispatch(request(data));

    const result = await registerRequest(data);
    if (result.status !== 201) {
      dispatch(failed(result));
      console.log(result);
      dispatch(alertAction.error(result.message));
    } else {
      dispatch(alertAction.clear());
      dispatch(success(result));
      window.location.href = '/login';
    }
    function request(user) {
      return { type: 'REGISTER_REQUEST', user }
    }

    function success(user) {
      return { type: 'REGISTER_SUCCESS', user }
    }

    function failed(error) {
      return { type: 'REGISTER_ERROR', error }
    }
  }

}


export const logoutAction = () => {
  localStorage.removeItem('user-fresh-market');
  return { type: 'LOGOUT' }
}