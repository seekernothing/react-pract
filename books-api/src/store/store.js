import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "../components/books/bookSlice"

export const store = configureStore({
    reducer:{
        books:bookReducer
    }
})