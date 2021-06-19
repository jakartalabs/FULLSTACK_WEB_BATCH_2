import { apiGetProduct } from '../../api/product';
export const getAllProductAction = (category)=>{
  
  return async (dispatch) =>{
    dispatch(request());

    const result = await apiGetProduct(category);
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
