import { createBrowserHistory } from 'history';

import { apiGetProduct } from '../../api/product';

export const getAllProductAction = ()=>{
  
  return async (dispatch) =>{
    dispatch(request());

    const result = await apiGetProduct();
    if (result.status !== 200) {
      dispatch(failed(result));
    }else{
      dispatch(success(result.data));
    }
    function request() {
      return { type: 'GET_PRODUCT_REQUEST' }
    }

    function success(products) {
      return { type: 'GET_PRODUCT_SUCCESS', products }
    }

    function failed(error) {
      return { type: 'GET_PRODUCT_ERROR', error }
    }
  } 
}