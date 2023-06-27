import { createSlice } from "@reduxjs/toolkit";

type IdGroupTodo = {
  idGroup: number | null;
};

export const idGroupToDoSlice = createSlice({
  name: "idGroupToDo",
  initialState: {
    idGroup: null,
  } as IdGroupTodo,
  reducers: {
    setIdGroup: (state, action) => {
      state.idGroup = action.payload;
    },
  },
});

export const { setIdGroup } = idGroupToDoSlice.actions;
export default idGroupToDoSlice.reducer;
