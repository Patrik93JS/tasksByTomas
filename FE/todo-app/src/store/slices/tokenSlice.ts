import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "@/types/User";
import { authenticationApi } from "@/store/api/authenticationApi";

export const tokenSlice = createSlice({
	name: "token",
	initialState: null as string | null,
	reducers: {
		set: (_state, { payload }: PayloadAction<Token>) => payload,
		reset: () => null,
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			authenticationApi.endpoints.login.matchFulfilled,
			(_state, { payload }) => payload.jwt
		);
		builder.addMatcher(
			authenticationApi.endpoints.register.matchFulfilled,
			(_state, { payload }) => payload.jwt
		);
	},
});
