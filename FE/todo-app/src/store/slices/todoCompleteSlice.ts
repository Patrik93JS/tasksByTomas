import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ToDoComplete = {
  todoComplete: Record<number, boolean>;
};

export const todoCompleteSlice = createSlice({
  name: "todoComplete",
  initialState: {
    todoComplete: {},
  } as ToDoComplete,
  reducers: {
    setComplete: (state, action: PayloadAction<{ id: number; checked: boolean }>) => {
      const { id, checked } = action.payload;
      state.todoComplete[id] = checked;
    },
  },
});

export const { setComplete } = todoCompleteSlice.actions;
export default todoCompleteSlice.reducer;
