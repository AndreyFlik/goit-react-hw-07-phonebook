import {
  fetchContacts,
  addContact,
  delContact,
} from "../../Components/services/api";
import {
  setContactRequest,
  setContactSuccess,
  setContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
} from "../../redux/contacts/contacts-actions";

export const getContacts = () => async (dispatch) => {
  dispatch(setContactRequest());

  try {
    const contacts = await fetchContacts();
    dispatch(setContactSuccess(contacts));
  } catch (error) {
    dispatch(setContactError(error));
    alert(`error`);
  }
};

export const addNewContacts = (contact) => async (dispatch) => {
  dispatch(addContactRequest());

  try {
    const contacts = await addContact(contact);
    dispatch(addContactSuccess(contacts));
  } catch (error) {
    dispatch(addContactError(error));
    alert(`error`);
  }
};

export const newDelContact = (contact) => async (dispatch) => {
  dispatch(delContactRequest());
  //   console.log(contact);
  try {
    const contacts = await delContact(contact);
    dispatch(delContactSuccess(contacts));
  } catch (error) {
    dispatch(delContactError(error));
    alert(`error`);
  }
};
