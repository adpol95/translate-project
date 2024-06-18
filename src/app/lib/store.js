import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";

export const makeStore  = () => {
    return configureStore({
        reducer: {theme: themeReducer},
    })
}

