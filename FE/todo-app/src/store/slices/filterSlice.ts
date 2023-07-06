import { createSlice } from "@reduxjs/toolkit";

type Filter = {
  filter: string;
  searchValue: string;
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  } as Filter,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setFilter, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
