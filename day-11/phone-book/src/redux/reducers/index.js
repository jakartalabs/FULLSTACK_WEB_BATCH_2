import { ADD_CONTACT } from '../type';

const initialState = {
  allContact: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT: {
      const { id, contact } = action.payload;
      contact.id=id;
      return {
        ...state,
        allContact: [...state.allContact, contact],
      }
    }
    default:
      return state;
  }
}