import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'counter657',
    initialState:{
        value:0,
        age:25
    },
    reducers:{
        increment:(state,action)=>{
            state.value+=1 
            state.age=action.payload.age
            console.log(state.value,state.age)
        },
        decrement:(state)=>{
            state.value-=1
        }
    }
})
export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer