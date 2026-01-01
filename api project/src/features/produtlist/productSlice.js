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
       console.log("setProducts ye hain --->", action.payload);
      
      state.items = action.payload;
      state.sortedItems = action.payload;
    },

    setCategories: (state, action) => {
      console.log("setCategories ye hain --->", action.payload);
      
      state.categories = action.payload;
    },

    // code for toggling the category

    toggleCategory: (state, action) => {
      const cat = action.payload;
      console.log("toggleCategory ye hain --->", cat);

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
        console.log( "filtered ", filtered);
        
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
