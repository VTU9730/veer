import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:'products',
    initialState:{
        value:0
    },
    reducers:{
        productIncrement:(state)=>{
            state.value+=1
        },
        productDecrement:(state)=>{
            state.value-=1
        }
    }
})

export const {productIncrement,productDecrement} =productSlice.actions
export default productSlice.reducer