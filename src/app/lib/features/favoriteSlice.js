import {createSlice} from "@reduxjs/toolkit";


// const readyListCh = cookieUser ? cookieUser.slice(cookieUser.lastIndexOf("=") + 1, cookieUser.lastIndexOf("?")) : "";
const initialState = {
    currentFavorite: {user: null, news: [], fav: {}, checkedL: ""}
}
export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        updateFavorite: (state, action) => {
            if (state.currentFavorite.fav[action.payload[0]]) state.currentFavorite = {
                ...state.currentFavorite,
                checkedL: state.currentFavorite.checkedL + `,${action.payload[1].id}`
            };
            else state.currentFavorite = {
                ...state.currentFavorite,
                checkedL: state.currentFavorite.checkedL + `,${action.payload[1].id}`
            };
        },
        deleteFavorite: (state, action) => {
            state.currentFavorite = {
                ...state.currentFavorite,
                checkedL: action.payload[2]
            };
        },
        toggleCookie: (state, action) => {
            state.currentFavorite = {
                ...state.currentFavorite,
                user: action.payload,
                checkedL: action.payload ? action.payload.value.slice(action.payload.value.lastIndexOf("=") + 1, action.payload.value.lastIndexOf("|")) : ""
            }
        },
        toggleEvents: (state, action) => {
            state.currentFavorite = {
                ...state.currentFavorite,
                news: action.payload,
            }
        },
    }
})

export const {updateFavorite, deleteFavorite, toggleCookie, toggleEvents} = favoriteSlice.actions;

export default favoriteSlice.reducer;
//first.map(e => [e[0], e[1].map(e2 => checkedList.includes(e2.id) ? e2 : "")]).filter(e3 => e3[1].length)