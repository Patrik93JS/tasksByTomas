import { createSlice } from "@reduxjs/toolkit";

type CreateGroupToDo = {
  title: string;
};

export const createGroupToDo = createSlice({
  name: "createGroupToDo",
  initialState: {
    title: "",
  } as CreateGroupToDo,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = createGroupToDo.actions;
export default createGroupToDo.reducer;
