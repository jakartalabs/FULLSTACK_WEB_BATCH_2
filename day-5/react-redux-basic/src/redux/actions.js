import axios from 'axios';
import { ADD_TODO, TOGGLE_TODO, FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './types';

let _todoId = 0;

export const addTodo = content =>({
  type: ADD_TODO,
  payload: {
    id: ++_todoId,
    content: content
  }
});

export const fetchUser = () => {
  return (dispatch) =>{
    dispatch(fetchUserRequest())
    axios
    .get('https://randomuser.me/api/')
    .then(res=>{
      console.log(res);
      const user = res.data.results
      setTimeout(()=>{
        dispatch(fetchUserSuccess(user))
      }, 2000)
    })
    .catch(error =>{
      dispatch(fetchUserError(error.messsage))
    })

  }
}

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUserSuccess = users => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}

export const fetchUserError = error => {
  return {
    type: FETCH_USER_ERROR,
    payload: error
  }
}


