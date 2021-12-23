import React from "react";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ filtered, del }) => {
  return (
    <ul className={s.styleList}>
      {filtered.map((contact) => (
        <li key={contact.id} className={s.styleContact}>
          Name: {contact.name} Tel: {contact.number}
          <button onClick={() => del(contact.id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filtered: PropTypes.array,
  del: PropTypes.func,
};

export default ContactList;
