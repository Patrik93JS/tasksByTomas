import { configureStore } from "@reduxjs/toolkit";
import createGroupToDo from "./slices/createGroupToDo";

export const store = configureStore({
  reducer: { createGroupToDo },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
