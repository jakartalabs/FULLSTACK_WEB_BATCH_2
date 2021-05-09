import {ADD_TODO} from '../types';

const initialState = {
  allIds: [],
  byIds: {}
};

// const initialState = {
//   listOfCart: [
//     {
//       itemID:1,
//       name:'SSD',
//       qty: 10,
//       price: 10000
//     },
//     {
//       itemID: 2,
//       name: 'SSD',
//       qty: 10,
//       price: 10000
//     }
//   ],
//   cartSummary: {
//     totalPrice: 20000,
//     jumlahBarang: 20
//   }
// };

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_TODO: {
      console.log(state);
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      }
    }
    default: 
      return state;
  }
}