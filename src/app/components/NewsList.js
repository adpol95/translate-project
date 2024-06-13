"use client"
import {useState} from "react";
import fetching from "@/app/fetch";
import Link from 'next/link'

export default function NewsList(props) {

    const btnCommonStyles = "text-[2vh] text-white px-[1.2em] py-[.8em] rounded-[10px] cursor-pointer absolute bottom-[-10vh] ";
    const btnActiveStyle = "bg-orange shadow-md hover:text-[1.3em] active:bg-yellow transition-font-size duration-150";
    const [news, setNews] = useState([...props.firstNews.news]);
    const [counter, setCounter] = useState(props.firstNews.pagination.pages - props.firstNews.pagination.pages + 2);
    const languages = {
        ru: {
            title: "Новости",
            activeBtn: "Загурузить еще ...",
            disabledBtn: "Новостей больше нет =("
        },
        en: {
            title: "News",
            activeBtn: "Load more ...",
            disabledBtn: "There is no more news =("
        }
    }
    const caller = async () => {
        try {
            const take = await fetching(counter);
            setNews([...news, ...take.news]);
            setCounter(counter + 1);
        } catch (err) {
            console.log(err)
        }
    }
    // if (!btnMoreNews) return (<button onClick={() => setBtnMoreNews(2)} className={btnStyle}>
    //     Загурузить еще ...
    // </button>)
    // fetching(btnMoreNews)
    //     .then((res) => {
    //         setNews(res)
    //     })
    //     .catch((err) => console.log(err))
    // useEffect(() => {
    // const newPage = async () => {
    //     const secondPage = await fetching(2);
    // }
    //
    // newPage()
    //     .then((res) => console.log(res))
    // }, []);
    return (
        <section className="flex flex-col items-center justify-between relative">
            <h1 className="text-[7vh] font-bold pb-[10vh]">{languages[props.ln].title}</h1>
            <ul>
                {news.map((item, index) => <li key={index} className="m-3">
                    <Link href={`${process.env.url}${props.ln}/news/${index + 1}`} className="hover:text-orange transition-colors delay-30 active:text-orange-pick text-[2vh]">
                    <h2 className="font-bold">{item[props.ln].title}</h2>
                    <button type="button" className="text-ellipsis overflow-hidden w-[10vw] h-[1.2em] whitespace-nowrap">{item[props.ln].description}</button>
                    <div> {item[props.ln].date}</div>
                    </Link>
                </li>)}
            </ul>
            <button disabled={counter > props.firstNews.pagination.pages} onClick={caller}
                    className={(counter > props.firstNews.pagination.pages) ? btnCommonStyles + "bg-gray-dark" : btnCommonStyles + btnActiveStyle}> {counter > props.firstNews.pagination.pages ? languages[props.ln].disabledBtn : languages[props.ln].activeBtn}
            </button>
        </section>
    )
}