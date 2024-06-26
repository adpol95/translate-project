import {configureStore} from "@reduxjs/toolkit";
import favoriteReducer from "./features/favoriteSlice";
import cookieReducers from "./features/cookieSlice";

export const makeStore  = () => {
    return configureStore({
        reducer: {
            favorite: favoriteReducer,
            cookie: cookieReducers
        },
    })
}

