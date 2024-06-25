"use client"
import useFetch from "@/app/hooks/useCookieFetch";
import {useState} from "react";

export default function CustomHook() {
    const [name, setName] = useState("");
    const [input, setInput] = useState("");
    const [inputSet, setInputSet] = useState("");
    const [setOn, setSetOn] = useState(false)
    const apiUrl = `${process.env.url}api/auth`;


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
        </div>
    );
}
