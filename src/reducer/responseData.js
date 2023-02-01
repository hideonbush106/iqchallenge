import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    testData: {}
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setTestData: (state, action) => {
            state.testData = action.payload;
        }
    }
})

export const { setTestData, setUser } = dataSlice.actions;


export default dataSlice.reducer