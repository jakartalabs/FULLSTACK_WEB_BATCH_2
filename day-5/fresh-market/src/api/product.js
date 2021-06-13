import axios from 'axios';
require('dotenv').config();
const { REACT_APP_API_URL_V1 } = process.env;
const token = localStorage.getItem('user-fresh-market');
const instanceV1 =axios.create({
  baseURL: REACT_APP_API_URL_V1,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${JSON.parse(token)}`
  }
})

export const apiGetCategory = async() =>{
  return instanceV1({
    method: 'GET',
    url: '/category'
  })
  .then((res)=>res)
  .catch((err)=>err.response.data);
}