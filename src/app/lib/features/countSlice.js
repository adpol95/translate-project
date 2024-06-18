import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentCount: 0
}
export const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        minusCount: (state) => {
            state.currentCount = state.currentCount - 1;
        },
        plusCount: (state) => {
            state.currentCount = state.currentCount + 1;
        },
    }
})

export const { minusCount, plusCount} = countSlice.actions;

export default countSlice.reducer;