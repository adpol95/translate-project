"use client"
import {useEffect, useState} from "react";
import fetching from "@/app/fetch";

export default function NewsList(props) {
    const [btnMoreNews, setBtnMoreNews] = useState(0);
    const btnStyle = "bg-orange text-white px-[1.2em] py-[.8em] rounded-[10px] cursor-pointer shadow-md hover:text-[1.3em] active:bg-yellow transition-font-size duration-150";
    const [news, setNews] = useState(null);
    if (!btnMoreNews) return (<button onClick={() => setBtnMoreNews(2)} className={btnStyle}>
        Загурузить еще ...
    </button>)
    useEffect(() => {
        fetching(btnMoreNews)
            .then((res) => {
                setNews(res)
            })
            .catch((err) => console.log(err))
    }, []);

    return (<div>
        <ul>
            {news.map((item, index) => <li key={index} className="m-3">
                <h2 className="font-bold">{item[props.ln].title}</h2>
                <p>{item[props.ln].description}</p>
                <div> {item[props.ln].date}</div>
            </li>)}
        </ul>
    </div>)
}