import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../utils/toggleSlice"

export const store = configureStore({
    reducer:{
        toggle:toggleReducer
    }
})