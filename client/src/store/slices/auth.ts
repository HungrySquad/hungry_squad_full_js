import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/auth";
import { ILogin } from "../../service/auth";

export interface AuthState {
  token: string;
  isLogged: boolean | null;
}

const initialState: AuthState = {
  token: "",
  isLogged: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isLogged = action.payload.isLogged;
      state.token = action.payload.isLogged;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLogged = true;
      state.token = (action.payload as ILogin).jwt_token;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLogged = false;
      state.token = "";
    });
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
