import { createReducer, combineReducers } from "@reduxjs/toolkit";
// setContact,
// addContact,
// delContact,
import {
  changeFilter,
  setContactRequest,
  setContactSuccess,
  setContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
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

// const itemsReducer = createReducer([], (builder) => {
//   builder.addCase(addContact, (state, action) => [...state, action.payload]);
//   builder.addCase(setContact, (_, action) => action.payload);
//   builder.addCase(delContact, (_, action) => action.payload);
// });
const entities = createReducer([], {
  [setContactSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, action) => [action.payload, ...state],
  [delContactSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload.id),
});
// .filter((itemId) => console.log(itemId.id))
const isLoading = createReducer(false, {
  [setContactRequest]: () => true,
  [setContactSuccess]: () => false,
  [setContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [delContactRequest]: () => true,
  [delContactSuccess]: () => false,
  [delContactError]: () => false,
});

const entitiesFilter = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});
// const filterReducer = createReducer("", (builder) => {
//   builder.addCase(changeFilter, (_, action) => action.payload);
// });

const contactsReducer = combineReducers({
  items: entities,
  filter: entitiesFilter,
  loading: isLoading,
});
// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

export default contactsReducer;
