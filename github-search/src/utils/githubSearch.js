import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  users: [],
  loading: false,
  error: null,
};

const githubSearchSlice = createSlice({
  name: "githubsearch",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      console.log("query is", action.payload);

      state.query = action.payload;
    },

    setStartFetching: (state, action) => {
      state.loading = true;
       state.error = null;
      
    },

    setFetchingSucccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    setFetchingError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setQuery,
  setStartFetching,
  setFetchingSucccess,
  setFetchingError,
} = githubSearchSlice.actions;
export default githubSearchSlice.reducer;
