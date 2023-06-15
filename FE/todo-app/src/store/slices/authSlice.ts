import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  username: string;
  email: string;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: { email: "" } as AuthState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<string>) => ({ ...state, email: payload }),
    setUsername: (state, { payload }: PayloadAction<string>) => ({ ...state, email: payload }),
  },
});

export const { setEmail, setUsername } = authSlice.actions;
