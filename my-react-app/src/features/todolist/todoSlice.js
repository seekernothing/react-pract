
import {createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos:[]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
         
            const newItem ={
            id: state.todos.length===0?1:state.todos.length+1,
            title:action.payload
            }
            console.log(newItem);
            

           state.todos.push(newItem)
        },
        deleteTodo:()=>{

        }
    }

})

export const {addTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer