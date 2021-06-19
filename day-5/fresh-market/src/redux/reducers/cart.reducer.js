export const cart = (state=[], action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_ITEM_CART':{
      const { id, qty } = action.data;
      if (state.items) {
        const find = state.items.filter((item, idx) => {
          if (item.id === id) {
            console.log('data');
            item._indexPos = idx;
            return item;
          }
        });
        if (find.length) {
          const currentQty = find[0]._qty;
          state.items[find[0]._indexPos]._qty = qty ? currentQty + qty : currentQty + 1;
          return state;
        }
        action.data._qty = 1;
        state.items.push(action.data);
        return { items: state.items };
      }
      action.data._qty = qty ? qty : 1;
      state.push(action.data);
      return { items: state };
    }
    case 'DECREMENT_ITEM_CART':{
      const { id } = action.data;
      if (state.items) {
        const find = state.items.filter((item, idx) => {
          if (item.id === id) {
            item._indexPos = idx;
            return item;
          }
        });
        if (find.length && find[0]._qty > 0) {
          const currentQty = find[0]._qty;
          state.items[find[0]._indexPos]._qty = currentQty - 1;
          return { items: state.items };
        }
      }
    }
    case 'INCREMENT_ITEM_CART': {
      const { id } = action.data;
      if (state.items) {
        const find = state.items.filter((item, idx) => {
          if (item.id === id) {
            item._indexPos = idx;
            return item;
          }
        });
        if (find.length && find[0]._qty >= 0) {
          const currentQty = find[0]._qty;
          state.items[find[0]._indexPos]._qty = currentQty + 1;
          return { items: state.items };
        }
      }
    }
    case 'REMOVE_ITEM_CART':{
      state.items.splice(action.data, 1);
      console.log(state)
      if (state.items.length) {
        return { items: state.items };
      }
      return state = [];
    }
    default:
      return state;
  }
}