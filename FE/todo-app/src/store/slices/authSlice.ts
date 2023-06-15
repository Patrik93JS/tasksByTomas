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
    setUsername: (state, { payload }: PayloadAction<string>) => ({ ...state, username: payload }),
  },
  extraReducers: (builder) => {
    builder.addCase(setUsername, (state, action) => {
      state.username = action.payload;
    });
    builder.addMatcher(authenticationApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.username = payload.user.username;
      return state;
    });
  },
});

export const { setEmail, setUsername } = authSlice.actions;
