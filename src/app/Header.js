"use client"
import {useState} from "react";

export default function Header() {
    const [langStateArea, setLangStateArea] = useState(true);
    return (
        <header
            className="flex flex-row justify-around bg-orange text-white p-5 fixed top-0 right-0 left-0 rounded-b-xl">
            <button>Новости</button>
            <button>Погода</button>
            <button>Пробки</button>
            <div onClick={() => {
                setLangStateArea(!langStateArea);
            }} className={langStateArea ? "" : "flex flex-col justify-center items-center"}>
                <button>Язык</button>
                <div className={langStateArea ? "hidden" : "flex flex-col"}>
                <hr/>
                    <button>Русский</button>
                    <button>English</button>
                </div>
            </div>
        </header>
    )
}