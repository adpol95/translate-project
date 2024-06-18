import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentTheme: 'dark',
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.currentTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer