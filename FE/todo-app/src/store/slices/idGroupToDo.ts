import { createSlice } from "@reduxjs/toolkit";

type IdGroupTodo = {
  idGroup: number | undefined;
};

export const idGroupToDoSlice = createSlice({
  name: "idGroupToDo",
  initialState: {
    idGroup: 1,
  } as IdGroupTodo,
  reducers: {
    setIdGroup: (state, action) => {
      state.idGroup = action.payload;
    },
  },
});

export const { setIdGroup } = idGroupToDoSlice.actions;
export default idGroupToDoSlice.reducer;
