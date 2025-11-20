
// name, initial state , reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList:[]
   
    
}




const todoReducer = createSlice({
    name:'todos',
    initialState,
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
        },
        editTodo(state,action){

            console.log(action);

            let todos = state.todoList

            let getCurrentTodoIndex = todos.findIndex(item =>item.id===action.payload.currentEditedTodoId)

            console.log(getCurrentTodoIndex,todos);

            todos[getCurrentTodoIndex] = {
                ...todos[getCurrentTodoIndex],
                title:action.payload.input
            }

            state.todoList = todos
            
            

            return state
        }
    }
})

export const {addTodo,deleteTodo,editTodo} = todoReducer.actions
export default todoReducer.reducer