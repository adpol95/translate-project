"use client";
import {Fragment, useState} from "react";
import fetching from "@/app/fetch";
import {useAppDispatch, useAppSelector} from "@/app/lib/hooks";
import {deleteFavorite, updateFavorite} from "@/app/lib/features/favoriteSlice";
import useFetch from "@/app/hooks/useCookieFetch";

export default function SortTableNews(props) {
    const borderStyle = "border-2 border-solid border-gray rounded-xl ";
    const currentFav = useAppSelector(state => state.favorite.currentFavorite);
    const [news, setNews] = useState([]);
    const [cookieFavSet, setCookieFavSet] = useState([]);
    const [preventRerender, setPreventRerender] = useState(false)
    const [checkedList, setCheckedList] = useState([]);
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

    const [stateUser, setStateUser] = useState({
        change: false,
        value: null
    });
    const {error} = useFetch(`${process.env.url}/api/auth`, currentFav.user ? currentFav.user.name.slice(5) : "", stateUser.change, stateUser.value, true);
    if (error) {
        //return <p className="mt-[5em]">Error: {error.message}</p>;
        console.log(error.message)
    }
    const dispatch = useAppDispatch();
    const caller = async () => {
        try {
            const take = await fetching(null, null, state ? "up" : "down");
            setAnimatTime(true);
            const profileEvents = take.map(e => [e[0], e[1].filter(el1 => checkedList.includes(el1.id + ""))]);
            setTimeout(() => {
                setState(!state);
                setNews(props.tp === "ssr" ? take : profileEvents);
                setBtnState(false);
                setAnimatTime(false);
            }, 200)

        } catch (err) {
            console.log(err)
            alert(props.ln === "en" ? err : "Невозможно подключиться к серверу, повторите попытку позднее");
            setBtnState(false);
            setAnimatTime(false);
        }
    }

    if (currentFav.news.length && !preventRerender) {
        setPreventRerender(true);
        const list = currentFav.checkedL.split(currentFav.checkedL ? "," : "").filter(ee => ee);
        const mainEvents = currentFav.news;
        const profileEvents = currentFav.news.map(e => [e[0], e[1].filter(el1 => list.includes(el1.id + ""))]);
        setTimeout(() => {
            setNews(props.tp === "ssr" ? mainEvents : profileEvents);
            setCheckedList(list)
        }, 100)
    }
    return (
        <section className="flex flex-col items-center justify-between p-[10vh]">
            {props.tp === "ssr" ?
                <h1 className="text-[7vh] font-bold pb-[10vh]">{props.ln === "ru" ? "События" : "Events"}</h1>
                :
                <h1 className="text-[7vh] font-bold pb-[10vh]">{props.ln === "ru" ? "Избранные" : "Favorite"}</h1>
            }

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
                    <th className="p-5" key={3326}>{props.ln === "ru" ? "Добавить" : "Add"}</th>

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
                                        <td className="p-5 text-center align-middle" key={i * 8}>
                                            <input type="checkbox"
                                                   className="accent-orange w-[1.5em] h-[1.5em] white cursor-pointer"
                                                   disabled={!currentFav.user}
                                                   onClick={(event) => {
                                                       event.preventDefault()
                                                       setNews([...news.filter(el5 => el5[0] !== el[0]), [el[0], [...el[1].filter(el6 => el6.id !== el2.id), {
                                                           ...el2,
                                                           checked: event.target.checked
                                                       }].sort((c, d) => c.id - d.id)]].sort((a, b) => b[0] - a[0]))
                                                   }}
                                                   checked={checkedList.includes(el2.id + "") ? true : el2.checked}
                                                // onClick={(event) => {
                                                //     setNews([...news, [el[0], [...el[1], {
                                                //         ...el2,
                                                //         checked: !event.target.checked,
                                                //     }]]]);
                                                //     console.log(news[i][1][i2].checked)
                                                // }}
                                                   onChange={(event) => {
                                                       if (event.target.checked) {
                                                           // setCookieFavSet([...cookieFavSet, el2.id])
                                                           // document.cookie = currentFav.user.replace(/favorite=.*\?/, `favorite=${checkedList.length ? checkedList.join(",") + "," : ""}${[...cookieFavSet, el2.id].join(",") + (checkedList.length ? "," : "")}?`) + ";path=/;expires=Tue, 19 Jan 2038 03:14:07 GMT";
                                                           // // const cookieFav = currentFav.user.slice(currentFav.user.indexOf("[") + 1, currentFav.user.indexOf("]")).split(",");
                                                           // // document.cookie = currentFav.user.slice(0, currentFav.user.indexOf("[")) + (cookieFav[0] === undefined ? `[${el2.id}]` : `[${[...cookieFav, el2.id].sort().join(",")}]`) + currentFav.user.slice(currentFav.user.lastIndexOf("?")) + ";path=/;expires=Tue, 19 Jan 2038 03:14:07 GMT";
                                                           // //checkedList.includes(el2.id)
                                                           // dispatch(updateFavorite([el[0], el2]));

                                                           setCookieFavSet([...cookieFavSet, el2.id]);
                                                           setStateUser({
                                                               change: true,
                                                               value: currentFav.user.value.replace(/favorite=.*\|/, `favorite=${checkedList.length ? checkedList.join(",") + "," : ""}${[...cookieFavSet, el2.id].join(",") + (checkedList.length ? "," : "")}|`)
                                                           })
                                                           // const cookieFav = currentFav.user.slice(currentFav.user.indexOf("[") + 1, currentFav.user.indexOf("]")).split(",");
                                                           // document.cookie = currentFav.user.slice(0, currentFav.user.indexOf("[")) + (cookieFav[0] === undefined ? `[${el2.id}]` : `[${[...cookieFav, el2.id].sort().join(",")}]`) + currentFav.user.slice(currentFav.user.lastIndexOf("?")) + ";path=/;expires=Tue, 19 Jan 2038 03:14:07 GMT";
                                                           //checkedList.includes(el2.id)
                                                           dispatch(updateFavorite([el[0], el2]));
                                                       } else {
                                                           const deleteId = cookieFavSet.concat(checkedList).filter(el7 => el7 !== el2.id + "").join(",");
                                                           setCheckedList(deleteId.split(deleteId.length > 1 ? "," : ""));
                                                           setStateUser({
                                                               change: true,
                                                               value: currentFav.user.value.replace(/favorite=.*\|/, `favorite=${deleteId}|`)
                                                           })
                                                           dispatch(deleteFavorite([el[0], el2, deleteId]));
                                                       }
                                                   }}
                                            />
                                        </td>
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