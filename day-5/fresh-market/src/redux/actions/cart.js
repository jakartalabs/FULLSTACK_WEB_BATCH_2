function addItem(data) {
  return { type: 'ADD_ITEM_CART', data }
}

function decrementItem(data) {
  return { type: 'DECREMENT_ITEM_CART', data }
}

function incrementItem(data) {
  return { type: 'INCREMENT_ITEM_CART', data }
}


function removeItem(data) {
  return { type: 'REMOVE_ITEM_CART', data }
}

export const cartActionAdd = (data)=>{
  return (dispatch) =>{
    dispatch(addItem(data))
  } 
}

export const cartActionRemove = (data) => {
  return (dispatch) => {
    dispatch(removeItem(data))
    
  }
}


export const cartActionDecrement = (data) => {
  return (dispatch) => {
    dispatch(decrementItem(data))
  }
}

export const cartActionIncrement = (data) => {
  return (dispatch) => {
    dispatch(incrementItem(data))
  }
}