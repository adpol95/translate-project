import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentCookie: 'COOKIE',
}

export const cookieSlice = createSlice({
    name: 'cookie',
    initialState,
    reducers: {
        toggleCookie: (state, action) => {
            state.currentCookie = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleCookie } = cookieSlice.actions

export default cookieSlice.reducer;