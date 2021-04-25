import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../types';

const initialState = {
  loading: false,
  users: [],
  error: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST: 
      return {
        ...state,
        loading: true,
      }
    case FETCH_USER_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error:''
      }
    case FETCH_USER_ERROR:
      return {
        users: [],
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}