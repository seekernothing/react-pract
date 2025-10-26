
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


            //console.log(action);

            const newTask = {
                id:state.todoList.length===0?1:state.todoList.length+1,
                title:action.payload
            }

            state.todoList.push(newTask)
            
            return state
        },

        deleteTodo(state,action){

            console.log(action);

            state.todoList = state.todoList.filter(todoItem=>(todoItem.id!==action.payload))
            

            return state
        }
    }
})

export const {addTodo,deleteTodo} = todoReducer.actions
export default todoReducer.reducer