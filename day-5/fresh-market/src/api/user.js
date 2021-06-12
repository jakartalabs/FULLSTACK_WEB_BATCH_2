import axios from 'axios';
require('dotenv').config();
const {REACT_APP_API_URL_AUTH} = process.env;

const instance =axios.create({
  baseURL: REACT_APP_API_URL_AUTH,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const login= async(data) =>{
  return instance({
    method: 'POST',
    url: '/login',
    data
  })
  .then((res)=>res)
  .catch((err)=>err.response.data);
}

export const register = async (data) =>{
  // console.log(data);
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
  } catch (error) {
    return error;
  }
}