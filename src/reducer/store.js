import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../reducer/responseData"
const store = configureStore({
    reducer: {
        //Define top-level state field
        data: dataSlice
    }
})

export default store