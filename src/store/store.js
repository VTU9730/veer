import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import productSlice from "../slices/productSlice";
import userLikesSlice from "../slices/userLikesSlice";
export const store=configureStore({
    reducer:{
        count:counterSlice,
        product:productSlice,
        likes:userLikesSlice
    }
})