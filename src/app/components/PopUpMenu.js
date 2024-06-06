"use client"
import {useState} from "react";
import ChangingLanguage from "@/app/components/ChangingLanguage";

export default function PopUpMenu(props) {
    const [langStateArea, setLangStateArea] = useState(true);
    return (
        <div className={langStateArea ? "" : "flex flex-col justify-center items-center"}>
            <button onClick={() => {
                setLangStateArea(!langStateArea);
            }}>
                {props.ln === "ru" ? "Язык" : "Language"}
            </button>
            <ChangingLanguage lsa={langStateArea}/>
        </div>
    )
}