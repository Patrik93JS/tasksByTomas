import { combineReducers } from "@reduxjs/toolkit";
import { appApi } from "./api";
import { createGroupToDo } from "./slices/createGroupToDo";
import { tokenSlice } from "./slices/tokenSlice";
import { idGroupToDoSlice } from "./slices/idGroupToDo";
import { todoCompleteSlice } from "./slices/todoCompleteSlice";
import { filterSlice } from "./slices/filterSlice";

export const appReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,
  [createGroupToDo.name]: createGroupToDo.reducer,
  [tokenSlice.name]: tokenSlice.reducer,
  [idGroupToDoSlice.name]: idGroupToDoSlice.reducer,
  [todoCompleteSlice.name]: todoCompleteSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});
