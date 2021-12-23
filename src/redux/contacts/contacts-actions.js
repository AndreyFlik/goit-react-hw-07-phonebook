import { createAction, nanoid } from "@reduxjs/toolkit";
const setContact = createAction("contacts/set_items");
const addContact = createAction("contacts/add_item", (contacts) => ({
  payload: { ...contacts, id: nanoid() },
}));
const delContact = createAction("contacts/remove_item");

const changeFilter = createAction("contacts/change_filter");

export { setContact, addContact, delContact, changeFilter };
