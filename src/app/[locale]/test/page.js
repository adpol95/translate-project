"use client"
import useFetch from "@/app/hooks/useCookieFetch";
import {useState} from "react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "@/app/lib/hooks";
import {toggleCookie} from "@/app/lib/features/cookieSlice";

export default function CustomHook() {
    const [name, setName] = useState("");
    const [input, setInput] = useState("");
    const [inputSet, setInputSet] = useState("");
    const [setOn, setSetOn] = useState(false)
    const apiUrl = `${process.env.url}api/auth`;
    const cookieToolKit = useSelector((state) => state.cookie.currentCookie);
    const dispatch = useAppDispatch();
    const {data, isLoading, error} = useFetch(apiUrl, name, setOn);
    if (isLoading) {
        return <p className="mt-[5em]">Loading...</p>;
    }
    if (error) {
        return <p className="mt-[5em]">Error: {error.message}</p>;
    }
    return (
        <div className="mt-[5em]">
            <h1>{data}</h1>
            <input className="bg-yellow" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={() => {
                setSetOn(false)
                setName(input);
            }}> Send </button>
            <input className="bg-orange" type="text" value={inputSet} onChange={(e) => setInputSet(e.target.value)}/>
            <button onClick={() => {
                setSetOn(true);
                setName(inputSet);
            }}> Send </button>
            <div className="font-bold text-2xl">{cookieToolKit}</div>
            <button onClick={() => {
                dispatch(toggleCookie(input))
            }}> Change redux</button>
        </div>
    );
}
