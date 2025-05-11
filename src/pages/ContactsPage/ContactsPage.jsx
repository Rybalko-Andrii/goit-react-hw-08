import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className="flex items-center justify-center h-screen">
      <ul>
        <li>
          <ContactForm />
          <SearchBox />
        </li>
        <li>
          <ContactList />
        </li>
      </ul>
    </section>
  );
};

export default ContactsPage;
