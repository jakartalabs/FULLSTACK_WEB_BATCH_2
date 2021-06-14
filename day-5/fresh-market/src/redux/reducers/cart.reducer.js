export const cart = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM_CART':
      state.push(action.data);
      return state;
    case 'REMOVE_ITEM_CART':
      return state.filter(item => item.id !== action.data);
    default:
      return state;
  }
}