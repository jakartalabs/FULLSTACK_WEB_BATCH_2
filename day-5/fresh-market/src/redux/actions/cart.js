export const cartActionAdd = (data)=>{
  return (dispatch) =>{
    dispatch(addItem())
    function addItem(){
      return { type: 'ADD_ITEM_CART', data}
    }
  } 
}