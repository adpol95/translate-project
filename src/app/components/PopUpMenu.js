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
            }} className="hover:text-yellow transition-colors delay-30 active:text-gray-dark">
                {props.ln === "ru" ? "Язык" : "Language"}
            </button>
            <ChangingLanguage lsa={langStateArea} anim={anima} ln={props.ln}/>
        </div>
    )
}