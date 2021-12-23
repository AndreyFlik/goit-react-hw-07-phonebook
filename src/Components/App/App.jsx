import React from "react";
// import { useEffect } from "react";
// import { connect } from "react-redux";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import { useSelector, useDispatch } from "react-redux";
// connect;
// import {
//   setContact,
//   addContact,
//   delContact,
//   changeFilter,
// } from "../../../src/redux/contacts/contacts-actions";
import * as actions from "../../../src/redux/contacts/contacts-actions";
// import { nanoid } from "nanoid";
// {
//   contacts,
//   filter,
//   onSetContacts,
//   onAddContact,
//   onDelContact,
//   onSetFilter,
// }
const App = () => {
  // console.dir(actions.addContact);
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    // onSetFilter(e.target.value);
    dispatch(actions.changeFilter(e.target.value));
  };
  // console.dir(setContact);
  const addContact = (data) => {
    const clear = contacts.some(
      ({ name }) => name.toLowerCase() === data.name.toLowerCase()
    );

    if (clear) {
      alert(`${data.name} Уже есть в списке`);
    } else {
      // onAddContact({ name: data.name, number: data.number });
      dispatch(actions.addContact({ name: data.name, number: data.number }));
      // onAddContact({ id: nanoid(), name: data.name, number: data.number });
    }
  };

  const delList = (idList) => {
    dispatch(actions.delContact(contacts.filter((item) => item.id !== idList)));
  };

  // useEffect(() => {
  //   const localContacts = localStorage.getItem("contact");
  //   const parsedContacts = JSON.parse(localContacts);
  //   if (parsedContacts) {
  //     onSetContacts(parsedContacts);
  //   }
  // }, [onSetContacts]);

  // useEffect(() => {
  //   localStorage.setItem("contact", JSON.stringify(contacts));
  // }, [contacts]);

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

// const mapStateToProps = (state) => ({
//   contacts: state.contacts.items,
//   filter: state.contacts.filter,
// });

// // console.dir(mapStateToProps.contacts);
// // ПОЛУЧАЕМ МЕТОДЫ ДЛЯ ИЗМЕНЕНИЯ СОСТОЯНИЯ
// const mapDispatchToProps = (dispatch) => ({
//   onSetContacts: (contacts) => dispatch(setContact(contacts)),
//   onAddContact: (contacts) => dispatch(addContact(contacts)),
//   onDelContact: (contacts) => dispatch(delContact(contacts)),

//   onSetFilter: (contacts) => dispatch(changeFilter(contacts)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
