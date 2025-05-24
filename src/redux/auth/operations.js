import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

const prepareAuth = (thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  /* console.log("Preparing auth, token:", token); */
  if (!token) throw new Error("No token");
  setAuthHeader(token);
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (e) {
      if (e.response && e.response.data && e.response.data.errors) {
        return thunkApi.rejectWithValue(e.response.data.errors);
      }

      return thunkApi.rejectWithValue({ general: "Server error" });
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(response.data.token);

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      prepareAuth(thunkAPI);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
