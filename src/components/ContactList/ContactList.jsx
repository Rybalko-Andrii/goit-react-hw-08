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

      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
