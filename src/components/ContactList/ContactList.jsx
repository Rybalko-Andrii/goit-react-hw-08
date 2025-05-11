import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import Loader from "../Loader/Loader";

import Contact from "../Contact/Contact";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {isLoading && !error && <Loader />}

      <ul class="grid grid-cols-4">
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} onDelete={handleDeleteContact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
