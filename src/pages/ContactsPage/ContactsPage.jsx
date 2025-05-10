import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

export default function TasksPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
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
}
