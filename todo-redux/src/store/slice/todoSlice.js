
// name, initial state , reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList:[]
}

const todoReducer = createSlice({
    name:'todos',
    initialState:initialState,
    reducers:{
        
    }
})