
// name, initial state , reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList:[]
}

const todoReducer = createSlice({
    name:'todos',
    initialState:initialState,
    reducers:{
        addTodo(state,action){
            return state
        }
    }
})

export const {addTodo} = todoReducer.actions
export default todoReducer.reducer