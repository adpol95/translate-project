import {configureStore} from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import countReducer from "./features/countSlice";

export const makeStore  = () => {
    return configureStore({
        reducer: {
            theme: themeReducer,
            count: countReducer
        },
    })
}

