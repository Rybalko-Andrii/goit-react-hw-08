import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const prepareAuth = (thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) throw new Error("No token");
  setAuthHeader(token);
};

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      prepareAuth(thunkAPI);
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      prepareAuth(thunkAPI);
      const response = await axios.post("/contacts", newContact);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      prepareAuth(thunkAPI);
      const response = await axios.delete(`/contacts/${contactId}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (contact, thunkAPI) => {
    try {
      prepareAuth(thunkAPI);
      const response = await axios.patch(`/contacts/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
