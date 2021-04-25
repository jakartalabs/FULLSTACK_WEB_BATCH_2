import {ADD_TODO} from '../types';

const initialState = {
  allIds: [],
  byIds: {}
};

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