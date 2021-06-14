import { createBrowserHistory } from 'history';

import { apiGetCategory } from '../../api/product';

export const getAllCategoryAction = ()=>{
  
  return async (dispatch) =>{
    dispatch(request());

    const result = await apiGetCategory();
    if (result.status !== 200) {
      dispatch(failed(result));
    }else{
      dispatch(success(result.data));
    }

    
    function request() {
      return { type: 'GET_CATEGORY_REQUEST' }
    }

    function success(category) {
      return { type: 'GET_CATEGORY_SUCCESS', category }
    }

    function failed(error) {
      return { type: 'GET_CATEGORY_ERROR', error }
    }
  } 
}