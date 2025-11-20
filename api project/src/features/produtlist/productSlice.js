
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    items:[],
    sortedItems:[]
}

const productSlice = createSlice({

    name:"productList",
    initialState,

    reducers:{

        setProducts:(state,action)=>{
          state.items = action.payload
          state.sortedItems = action.payload
        },

        sortedByAscending:(state)=>{
            state.sortedItems = [...state.items].sort((a,b)=>a.price-b.price)
        },

        sortedItemsByDescending:(state)=>{
            state.sortedItems = [...state.items].sort((a,b)=>b.price-a.price)
        }


    }

})

export const {setProducts,sortedByAscending,sortedItemsByDescending} = productSlice.actions

export default productSlice.reducer