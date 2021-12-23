import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  setContact,
  addContact,
  delContact,
  changeFilter,
} from "../contacts/contacts-actions";
// import {
//   setContactRequest,
//   setContactSuccess,
//   setContactError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   delContactRequest,
//   delContactSuccess,
//   delContactError,
// } from "../contacts/contacts-actions";

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const itemsReducer = createReducer([], (builder) => {
  builder.addCase(addContact, (state, action) => [...state, action.payload]);
  builder.addCase(setContact, (_, action) => action.payload);
  builder.addCase(delContact, (_, action) => action.payload);
});

const filterReducer = createReducer("", (builder) => {
  builder.addCase(changeFilter, (_, action) => action.payload);
});
const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
