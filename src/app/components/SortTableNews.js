"use client";
import {Fragment, useState} from "react";
import fetching from "@/app/fetch";
import {useAppDispatch} from "@/app/lib/hooks";
import {deleteFavorite, updateFavorite} from "@/app/lib/features/favoriteSlice";

export default function SortTableNews(props) {
    const borderStyle = "border-2 border-solid border-gray rounded-xl ";
    const [news, setNews] = useState(props.nw);
    const [state, setState] = useState(true);
    const [btnState, setBtnState] = useState(false);
    const [animatTime, setAnimatTime] = useState(false);
    const pointerArrow = {
        en: !state ? "New-Old" : "Old-New",
        ru: !state ? "По возрастанию" : "По убыванию",
    }
    const lib = [
        {
            ru: "Января",
            en: "January"
        },
        {
            ru: "Февраля",
            en: "February"
        },
        {
            ru: "Марта",
            en: "March"
        },
        {
            ru: "Апреля",
            en: "April"
        },
        {
            ru: "Мая",
            en: "May"
        },
        {
            ru: "Июня",
            en: "June"
        },
        {
            ru: "Июля",
            en: "July"
        },
        {
            ru: "Августа",
            en: "August"
        },
        {
            ru: "Сентября",
            en: "September"
        },
        {
            ru: "Октября",
            en: "October"
        },
        {
            ru: "Ноября",
            en: "November"
        },
        {
            ru: "Декабря",
            en: "December"
        },
    ]
    const dispatch = useAppDispatch();
    const caller = async () => {
        try {
            const take = props.tp === "ssr" ? await fetching(null, null, state ? "up" : "down") : state ?
                news.sort((a, b) => b[0] - a[0])
                :
                news.sort((a, b) => a[0] - b[0]);
            setAnimatTime(true);
            setTimeout(() => {
                setState(!state);
                setNews(take);
                setBtnState(false);
                setAnimatTime(false);
            }, 550)

        } catch (err) {
            console.log(err)
            alert(props.ln === "en" ? err : "Невозможно подключиться к серверу, повторите попытку позднее");
            setBtnState(false);
            setAnimatTime(false);
        }
    }
    return (
        <section className="flex flex-col items-center justify-between p-[10vh]">
            <h1 className="text-[7vh] font-bold pb-[10vh]">{props.ln === "ru" ? "События" : "Events"}</h1>
            <table className={`table-auto ${borderStyle} z:text-[1.5vw] xl:text-[.8vw] overflow-x-auto`}>
                <thead className={borderStyle}>
                <tr className={`${borderStyle} bg-gray-light font-bold`}>
                    <th className="p-5 min-w-[15vw] cursor-pointer" key={6566} onClick={() => {
                        setBtnState(true);
                        setTimeout(caller, 2000);
                    }}>
                        <button type="submit"
                                className={`group relative ${btnState ? "text-red animate-pulse" : "text-black"} transition-colors delay-100`}
                                disabled={btnState}>
                            {props.ln === "ru" ? "Дата" : "Date"}
                            <p className={`absolute top-0 left-[115%] ${!animatTime ? "" : "animate-roll"}`}> {state ? <>&#8595;</> : <>&#8593;</>}</p>
                            <div className="text-[1vw] text-gray-light absolute top-[-150%] left-[150%] bg-gray-dark p-1
                                rounded-md shadow-lg opacity-0 transition-opacity delay-30 group-hover:opacity-100
                                pointer-events-none">
                                {btnState && props.ln === "en" ? "Loading..." : btnState && props.ln === "ru" ? "Загрузка..." : pointerArrow[props.ln]}
                            </div>
                        </button>
                    </th>
                    <th className="p-5" key={32423}>{props.ln === "ru" ? "Событие" : "Event"}</th>
                    <th className="p-5" key={3322}>{props.ln === "ru" ? "Описание" : "Description"}</th>
                    {props.tp === "rdx" ? <></> :
                        <th className="p-5" key={3326}>{props.ln === "ru" ? "Добавить" : "Add"}</th>}

                </tr>
                </thead>
                <tbody className={borderStyle}>
                {news.map((el, i) => el[1].length ? <Fragment key={i}>
                        <tr className={`${borderStyle} h-[3.5vw] relative`}>
                            <td className="font-bold absolute left-0 right-0 top-[25%] text-center"
                                key={i * 52}>{el[0]}</td>
                        </tr>
                        {
                            el[1].map((el2, i2) => {
                                return i2 === el[1].lastIndexOf(el2) ?
                                    <tr className={`${borderStyle}`} key={i2 * 6226}>
                                    <td className="p-2 text-center align-middle"
                                        key={i + 1}>{new Date(el2.date).getDate() + " " + lib[new Date(el2.date).getMonth()][props.ln]} </td>
                                    <td className="p-5 text-center align-middle" key={i + 2}>{el2[props.ln].title}</td>
                                    <td className="p-5 text-center align-middle"
                                        key={i + 3}>{el2[props.ln].description}</td>
                                    {props.tp === "rdx" ? <></> :
                                        <td className="p-5 text-center align-middle" key={i * 8}>
                                            <input type="checkbox"
                                                   className="accent-orange w-[1.5em] h-[1.5em] white cursor-pointer"
                                                   onChange={(event) => event.target.checked ? dispatch(updateFavorite([el[0], el2])) : dispatch(deleteFavorite([el[0], el2]))}/>
                                        </td>
                                    }
                                </tr> : <></>
                            })
                        }
                    </Fragment> : <></>
                )}
                </tbody>
            </table>
        </section>
    )
}