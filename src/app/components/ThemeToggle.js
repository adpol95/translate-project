"use client"
import {toggleTheme} from "../lib/features/themeSlice";
import {useAppDispatch, useAppSelector} from "../lib/hooks";
import {minusCount, plusCount} from "@/app/lib/features/countSlice";

export default function ThemeToggle() {

    const currentTheme = useAppSelector(state => state.theme.currentTheme);
    const currentCount = useAppSelector(state => state.count.currentCount);
    const dispatch = useAppDispatch();
    return (
        <div>
            <p>Current theme: {currentTheme}</p>
            <button onClick={() => dispatch(toggleTheme())}>Update theme</button>
            <div>
                <button onClick={() => dispatch(minusCount())}>-</button>
                {currentCount}
                <button onClick={() => dispatch(plusCount())}>+</button>
            </div>
        </div>
    )
}