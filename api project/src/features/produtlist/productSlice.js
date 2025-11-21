import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  sortedItems: [],
  categories: [],
  selectedCategories: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.sortedItems = action.payload;
    },

    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    toggleCategory: (state, action) => {
      const cat = action.payload;

      if (state.selectedCategories.includes(cat)) {
        state.selectedCategories = state.selectedCategories.filter(
          (c) => c !== cat
        );
      } else {
        state.selectedCategories.push(cat);
      }

      // Apply filter + sort again with updated categories
      let filtered = state.items;

      if (state.selectedCategories.length > 0) {
        filtered = filtered.filter((p) =>
          state.selectedCategories.includes(p.category)
        );
      }

      state.sortedItems = filtered;
    },

    sortedByAscending: (state) => {
      let filtered = state.items;

      if (state.selectedCategories.length > 0) {
        filtered = filtered.filter((p) =>
          state.selectedCategories.includes(p.category)
        );
      }

      state.sortedItems = [...filtered].sort((a, b) => a.price - b.price);
    },

    sortedItemsByDescending: (state) => {
      let filtered = state.items;

      if (state.selectedCategories.length > 0) {
        filtered = filtered.filter((p) =>
          state.selectedCategories.includes(p.category)
        );
      }

      state.sortedItems = [...filtered].sort((a, b) => b.price - a.price);
    },
  },
});

export const {
  setProducts,
  setCategories,
  toggleCategory,
  sortedByAscending,
  sortedItemsByDescending,
} = productSlice.actions;

export default productSlice.reducer;
