import { combineReducers } from "@reduxjs/toolkit";
import { appApi } from "./api";
import { createGroupToDo } from "./slices/createGroupToDo";
import { tokenSlice } from "./slices/tokenSlice";
import { idGroupToDoSlice } from "./slices/idGroupToDo";

export const appReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
  [createGroupToDo.name]: createGroupToDo.reducer,
  [tokenSlice.name]: tokenSlice.reducer,
  [idGroupToDoSlice.name]: idGroupToDoSlice.reducer,
});
