import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBooks: [],
  books: [],
  authors: [],
  checkedAuthor: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      const list = action.payload;
      state.allBooks = list;
      state.books = list;
    },

    sortByAuthors: (state, action) => {
      state.authors = action.payload;
    },

    toggleByAuthor: (state, action) => {
      const aut = action.payload;

      if (state.checkedAuthor.includes(aut)) {
        state.checkedAuthor = state.checkedAuthor.filter((a) => a !== aut);
      } else {
        state.checkedAuthor.push(aut);
      }

      if (state.checkedAuthor.length > 0) {
        state.books = state.allBooks.filter((b) =>
          state.checkedAuthor.includes(b.author)
        );
      } else {
        state.books = state.allBooks;
      }
    },
  },
});

export const { setBooks, sortByAuthors, toggleByAuthor } = bookSlice.actions;
export default bookSlice.reducer;
