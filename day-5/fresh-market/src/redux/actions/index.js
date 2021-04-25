import { ADD_DATA } from '../constants/type';

export function addData(payload){
  return { type: ADD_DATA, payload };
}