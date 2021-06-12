import { createBrowserHistory } from 'history';

import { loginRequest } from '../../api/user';
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
      dispatch(success(result));
      localStorage.setItem('user-fresh-market', JSON.stringify(result));
      window.location.href = '/';
    }
  }

  function request(user){
   return { type: 'LOGIN_REQUEST', user}
  }

  function success(user) {
    return { type: 'LOGIN_SUCCESS', user }
  }

  function failed(error) {
    return { type: 'LOGIN_ERROR', error}
  }
}