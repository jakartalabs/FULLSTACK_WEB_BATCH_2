export const cart = (state=[], action) => {
  switch (action.type) {
    case 'ADD_ITEM_CART':
      const { id, qty }= action.data;
      if (state.items) {
        const find = state.items.filter((item, idx) => {
          if (item.id === id){
            console.log('data');
            item._indexPos = idx;
            return item;
          }
        });
        if(find.length){
          const currentQty = find[0]._qty;
          state.items[find[0]._indexPos]._qty = qty ? currentQty + qty : currentQty + 1;
          return state;
        }
        action.data._qty = 1;
        state.items.push(action.data);
        return { items: state.items };
      } 
      action.data._qty = 1;
      state.push(action.data);
      return { items:state };
    case 'REMOVE_ITEM_CART':
      return state.filter(item => item.id !== action.data);
    default:
      return state;
  }
}