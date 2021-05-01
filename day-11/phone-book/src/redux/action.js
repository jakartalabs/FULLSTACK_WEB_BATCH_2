import { ADD_CONTACT } from './type';

let  contactID= 0;

export const addContact = (newContact) => ({
  type: ADD_CONTACT,
  payload: {
    id: ++contactID,
    contact: newContact
  }
});