
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    dark:false
}

const toggleSlice = createSlice({
    name:"toggle",
    initialState,
    reducers:{
        setDark:(state,action)=>{
            console.log("dark is",action.payload);
            
            state.dark = action.payload
        }
    }

})

export const{setDark} = toggleSlice.actions
export default toggleSlice.reducer