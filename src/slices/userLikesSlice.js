import { createSlice } from "@reduxjs/toolkit";

const userLikesSlce = createSlice({
    name:'userLikes',
    initialState:{
        value:0
    },
    reducers:{
        incrementLikes:(state)=>{state.value+=1},
        decrementLikes:(state)=>{state.value-=1}
    }
})

export const {incrementLikes,decrementLikes} = userLikesSlce.actions
export default userLikesSlce.reducer