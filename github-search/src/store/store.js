
import { configureStore } from "@reduxjs/toolkit";
import githuhbReducer from "../utils/githubSearch"

export const store = configureStore({
    reducer:{
        githubsearch:githuhbReducer
    }
})