import React, { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";

import s from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.ul}>
      <li>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
      </li>
      <li>
        <ContactList />
      </li>
    </ul>
  );
};

export default App;
