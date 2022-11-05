import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";
import userAPI from "../../service/auth";
import { setAuth } from "../slices/auth";

const loginUser = createAsyncThunk(
  "auth/login",
  async ({
    email,
    password,
  }: {
    email: IUser["email"];
    password: IUser["password"];
  }) => {
    const response = await userAPI.login(email, password);
    return response;
  }
);

const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({
    email,
    password,
    gender,
  }: {
    email: IUser["email"];
    password: IUser["password"];
    gender: IUser["gender"];
  }) => {
    const response = await userAPI.register(email, password, gender);
    return response;
  }
);

const checkAuth = createAsyncThunk("auth/me", async (_, thunkAPI) => {
  const token = localStorage.getItem("token");

  if (token) {
    const response = await userAPI.checkMe(token);

    if (response) {
      thunkAPI.dispatch(setAuth({ isLogged: true, token }));
    } else {
      thunkAPI.dispatch(setAuth({ isLogged: false, token: "" }));
    }
  } else {
    thunkAPI.dispatch(setAuth({ isLogged: false, token: "" }));
  }
});

export { loginUser, registerUser, checkAuth };
