import axios from 'axios';

export const register = async (data) =>{
  // console.log(data);
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
  } catch (error) {
    return error;
  }
}