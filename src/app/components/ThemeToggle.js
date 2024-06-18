"use client"
import {toggleTheme} from "../lib/features/themeSlice";
import {useAppDispatch, useAppSelector} from "../lib/hooks";

export default function ThemeToggle() {

    const currentTheme = useAppSelector(state => state.theme.currentTheme);
    const dispatch = useAppDispatch();
    return (
        <div>
            <p>Current theme: {currentTheme}</p>
            <button onClick={() => dispatch(toggleTheme())}>Update theme</button>
        </div>
    )
}