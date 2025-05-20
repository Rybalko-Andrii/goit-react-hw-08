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
    <section className="px-4 ">
      <ul className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-start">
        <li className="mb-4">
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
