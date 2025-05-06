import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filterValue) => {
    if (filterValue !== "") {
      return contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
          contact.number.includes(filterValue)
      );
    }
    return contacts;
  }
);
