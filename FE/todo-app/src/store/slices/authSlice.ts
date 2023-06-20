import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authenticationApi } from "../api/authenticationApi";

type AuthState = {
  username: string;
  email: string;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: { email: "", username: "" } as AuthState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<string>) => ({ ...state, email: payload }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(authenticationApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      console.log("payload", payload.user.username);
      state.username = payload.user.username;
      return state;
    });
  },
});

export const { setEmail } = authSlice.actions;
