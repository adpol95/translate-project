import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentFavorite: {user: document.cookie.split(";").find(el => el.includes("OK")), fav: {}}
}
export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        updateFavorite: (state, action) => {
            if (state.currentFavorite.fav[action.payload[0]]) state.currentFavorite = {
                ...state.currentFavorite,
                fav: {
                    ...state.currentFavorite.fav,
                    [action.payload[0]]: [...state.currentFavorite.fav[action.payload[0]], action.payload[1]]
                }
            };
            else state.currentFavorite = {
                ...state.currentFavorite,
                fav: {...state.currentFavorite.fav, [action.payload[0]]: [action.payload[1]]}
            };
        },
        deleteFavorite: (state, action) => {
            state.currentFavorite = {
                ...state.currentFavorite,
                fav: {[action.payload[0]]: state.currentFavorite.fav[action.payload[0]].filter(item => item.id !== action.payload[1].id)}
            };
        },
    }
})

export const {updateFavorite, deleteFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;