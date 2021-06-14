export const cartActionAdd = (data)=>{
  return (dispatch) =>{
    dispatch({ type: 'ADD_ITEM_CART', data})
  } 
}