// import { combineReducers } from "redux";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  setContact,
  addContact,
  delContact,
  changeFilter,
} from "../contacts/contacts-actions";

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case ("contacts/set_items", "contacts/remove_item"):
//       return action.payload;

//     case "contacts/add_item":
//       return [...state, action.payload];

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "contacts/change_filter":
//       return action.payload;

//     default:
//       return state;
//   }
// };
// const itemsReducer = createReducer([], {
//   [addContact.type]: (state, action) => [...state, action.payload],
//   [setContact.type]: (_, action) => action.payload,

//   [delContact.type]: (_, action) => action.payload,
// });

// const filterReducer = createReducer("", {
//   [changeFilter.type]: (_, action) => action.payload,
// });

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });
const itemsReducer = createReducer([], (builder) => {
  builder.addCase(addContact, (state, action) => [...state, action.payload]);
  builder.addCase(setContact, (_, action) => action.payload);
  builder.addCase(delContact, (_, action) => action.payload);
});

const filterReducer = createReducer("", (builder) => {
  builder.addCase(changeFilter, (_, action) => action.payload);
});
// const filterReducer = createReducer("", {
//   [changeFilter.type]: (_, action) => action.payload,
// });

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
