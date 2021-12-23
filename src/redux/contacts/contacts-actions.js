import { createAction, nanoid } from "@reduxjs/toolkit";

// const setContact = (contacts) => {
//   return {
//     type: "contacts/set_items",
//     payload: contacts,
//   };
// };

const setContact = createAction("contacts/set_items");
// console.dir(setContact);
// const addContact = (contact) => {
//   return {
//     type: "contacts/add_item",
//     payload: contact,
//   };
// };

const addContact = createAction("contacts/add_item", (contacts) => ({
  payload: { ...contacts, id: nanoid() },
}));

// const delContact = (contact) => {
//   return {
//     type: "contacts/remove_item",
//     payload: contact,
//   };
// };

const delContact = createAction("contacts/remove_item");

// const changeFilter = (value) => {
//   return {
//     type: "contacts/change_filter",
//     payload: value,
//   };
// };

const changeFilter = createAction("contacts/change_filter");

export { setContact, addContact, delContact, changeFilter };
