import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import countReducer from "./features/countSlice";
import favoriteReducer from "./features/favoriteSlice";

export const makeStore  = () => {
    return configureStore({
        reducer: {
            theme: themeReducer,
            count: countReducer,
            favorite: favoriteReducer
        },
    })
}

