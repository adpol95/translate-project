"use client"
import {useState} from "react";
import ChangingLanguage from "@/app/components/ChangingLanguage";

export default function PopUpMenu(props) {
    const [langStateArea, setLangStateArea] = useState(true);
    const [counter, setCounter] = useState(0);
    const [anima, setAnima] = useState(true);

    return (
        <div className={langStateArea ? "" : "flex flex-col justify-center items-center"}>
            <button onClick={() => {
                setCounter(counter + 1);
                if (counter % 2 === 0) {
                    setLangStateArea(!langStateArea);
                    setAnima(true);
                } else {
                    setAnima(false);
                    setTimeout(() => setLangStateArea(!langStateArea), 500);
                }
            }}>
                {props.ln === "ru" ? "Язык" : props.ln === "en" ? "Language" : "Langue"}
            </button>
            <ChangingLanguage lsa={langStateArea} anim={anima}/>
        </div>
    )
}