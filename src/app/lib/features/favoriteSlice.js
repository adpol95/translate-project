import {createSlice} from "@reduxjs/toolkit";
import fetching from "@/app/fetch";

const cookieUser = document.cookie.split(";").find(el => el.includes("OK"));
const readyListCh = cookieUser ? cookieUser.slice(cookieUser.lastIndexOf("=") + 1, cookieUser.lastIndexOf("?")) : "";
const initialState = {
    currentFavorite: {user: cookieUser, news: fetching(null, "events"), fav: {}, checkedL: readyListCh}
}
export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        updateFavorite: (state, action) => {
            if (state.currentFavorite.fav[action.payload[0]]) state.currentFavorite = {
                ...state.currentFavorite,
                fav: {
                    // ...state.currentFavorite.fav,
                    // [action.payload[0]]: [...state.currentFavorite.fav[action.payload[0]], action.payload[1]]
                },
                checkedL: state.currentFavorite.checkedL + `,${action.payload[1].id}`
            };
            else state.currentFavorite = {
                ...state.currentFavorite,
                fav: {
                    // ...state.currentFavorite.fav, [action.payload[0]]: [action.payload[1]]
                },
                checkedL: state.currentFavorite.checkedL + `,${action.payload[1].id}`
            };
        },
        deleteFavorite: (state, action) => {
            state.currentFavorite = {
                ...state.currentFavorite,
                fav: {

                },
                checkedL: action.payload[2]
            };
        },
    }
})

export const {updateFavorite, deleteFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;
//first.map(e => [e[0], e[1].map(e2 => checkedList.includes(e2.id) ? e2 : "")]).filter(e3 => e3[1].length)