import axios from 'axios';
import { setupInterceptors } from './interceptor';
require('dotenv').config();
const { REACT_APP_API_URL_AUTH, REACT_APP_API_URL } = process.env;

const instanceAuth =axios.create({
  baseURL: REACT_APP_API_URL_AUTH,
  headers: {
    'Content-Type': 'application/json'
  }
})

setupInterceptors(instanceAuth);
const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

setupInterceptors(instance);
export const loginRequest= async(data) =>{
  return instanceAuth({
    method: 'POST',
    url: '/login',
    data
  })
  .then((res) => res)
  .catch((err)=>err.response.data);
}

export const registerRequest = async (data) => {
  return instance({
    method: 'POST',
    url: '/register',
    data
  })
    .then((res) => res.response)
    .catch((err) => err.response.data);
}