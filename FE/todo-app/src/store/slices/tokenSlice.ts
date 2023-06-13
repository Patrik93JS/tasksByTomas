import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "@/types/User";

export const tokenSlice = createSlice({
  name: "token",
  initialState: null as string | null,
  reducers: {
    set: (_state, { payload }: PayloadAction<Token>) => payload,
    reset: () => null,
  },
});
