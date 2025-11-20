import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/produtlist/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
