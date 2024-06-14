"use client"
import {Fragment, useState} from "react";
import fetching from "@/app/fetch";

export default function SortTableNews(props) {
    const borderStyle = "border-2 border-solid border-gray rounded-xl ";
    const [news, setNews] = useState(props.nw);
    const [state, setState] = useState(true);

    const caller = async () => {
        try {
            const take = await fetching(null, null, state ? "up" : "down");
            setState(!state);
            setNews([...take]);
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <section className="flex flex-col items-center justify-between p-[10vh]">
            <h1 className="text-[7vh] font-bold pb-[10vh]">{props.ln === "ru" ? "События" : "Events"}</h1>

            <table className={`table-auto ${borderStyle} z:text-[1.5vw] xl:text-[.8vw] overflow-x-auto`}>
                <thead className={borderStyle}>
                <tr className={`${borderStyle} bg-gray-light font-bold`}>
                    <th className="p-5 min-w-[15vw]" key={6566}>
                        {props.ln === "ru" ? "Дата" : "Date"}
                        <button type="submit" onClick={caller}>
                            {!state ? <>&#8595;</> : <>&#8593;</>}
                        </button>
                    </th>
                    <th className="p-5" key={32423}>{props.ln === "ru" ? "Событие" : "Event"}</th>
                    <th className="p-5" key={3322}>{props.ln === "ru" ? "Описание" : "Description"}</th>
                </tr>
                </thead>
                <tbody className={borderStyle}>
                {news.map((item, i) => {
                    const div = item.date.split("-");
                    // const year = i === 0 || item.year - news[i - 1].year;
                    const year = item.year !== news[i - 1]?.year ? item.year : null;
                    return <Fragment key={item.id}>
                        {year ?
                            <tr className={`${borderStyle} h-[3.5vw] relative`}>
                                <td className="font-bold absolute left-0 right-0 top-[25%] text-center"
                                    key={i * 52}>{item.year}</td>
                            </tr>
                            : <></>}
                        <tr className={`${borderStyle}`}>
                            <td className="p-2 text-center align-middle"
                                key={i + 1}>{`${div[div.length - 1]} ${props.lb[div[div.length - 2] - 1][props.ln]}`}</td>
                            <td className="p-5 text-center align-middle" key={i + 2}>{item[props.ln].title}</td>
                            <td className="p-5 text-center align-middle" key={i + 3}>{item[props.ln].description}</td>
                        </tr>
                    </Fragment>
                })}
                </tbody>
            </table>
        </section>
    )
}