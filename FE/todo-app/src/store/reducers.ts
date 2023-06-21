import { combineReducers } from "@reduxjs/toolkit";
import { appApi } from "./api";
import { createGroupToDo } from "./slices/createGroupToDo";
import { tokenSlice } from "./slices/tokenSlice";
// import { authSlice } from "./slices/authSlice";

export const appReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
  [createGroupToDo.name]: createGroupToDo.reducer,
  [tokenSlice.name]: tokenSlice.reducer,
  // [authSlice.name]: authSlice.reducer,
});
