import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "@/types/User";
import { authenticationApi } from "@/store/api/authenticationApi";
import { HydrateCookieAction } from "../store";
import { HYDRATE } from "next-redux-wrapper";

export const tokenSlice = createSlice({
  name: "token",
  initialState: null as string | null,
  reducers: {
    set: (_state, { payload }: PayloadAction<Token>) => payload,
    reset: () => null,
  },
  extraReducers: (builder) => {
    builder.addCase<string, HydrateCookieAction>(HYDRATE, (state, { payload }) => (state ? state : payload.token ? payload.token : null));
    builder.addMatcher(authenticationApi.endpoints.login.matchFulfilled, (_state, { payload }) => payload.jwt);
    builder.addMatcher(authenticationApi.endpoints.register.matchFulfilled, (_state, { payload }) => payload.jwt);
  },
});
