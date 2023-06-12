import { createSlice } from "@reduxjs/toolkit";

type CreateGroupToDoState = {
  title: string;
};

export const createGroupToDo = createSlice({
  name: "createGroupToDo",
  initialState: {
    title: "",
  } as CreateGroupToDoState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setTitle } = createGroupToDo.actions;
export default createGroupToDo.reducer;
