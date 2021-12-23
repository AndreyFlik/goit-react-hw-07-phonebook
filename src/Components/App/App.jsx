import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../../src/redux/contacts/contacts-actions";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

const App = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(actions.changeFilter(e.target.value));
  };
  const addContact = (data) => {
    const clear = contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (clear) {
      alert(`${data.name} Уже есть в списке`);
    } else {
      dispatch(actions.addContact({ name: data.name, number: data.number }));
    }
  };

  const delList = (idList) => {
    dispatch(actions.delContact(contacts.filter((item) => item.id !== idList)));
  };
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <>
      <h1>Тел.Книга</h1>
      <Form addList={addContact} />
      <h2>Contacts</h2>
      <Filter onChangeFilter={handleChangeFilter} filState={filter} />
      {filteredContacts.length > 0 && (
        <ContactList filtered={filteredContacts} del={delList} />
      )}
    </>
  );
};
export default App;
