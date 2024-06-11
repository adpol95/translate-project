import fetching from "@/app/fetch";
import NewsList from "@/app/components/NewsList";

export default async function LanguagePic({params}) {
    // const [datas, setDatas] = useState([]);
    //
    // useEffect(() => {
    //     fetch("/api/chat-gpt", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             someData: true
    //         })
    //     })
    //         .then((res) => res.json())
    //         .then(response => {
    //             setDatas(response)
    //         })
    // }, []);
    // console.log(datas)
    const news = await fetching(1);
    if (!news) return (<p className="pt-[20vh] pb-[8vh] flex-[1 1 auto]">
        Sorry, we don't have any news yet.
    </p>)
    const local = params.locale;
    return (
        <main className="pt-[20vh] pb-[8vh] flex-[1 1 auto]">
            <section className="flex flex-col items-center justify-between">
                <h1 className="text-[7vh] font-bold pb-[10vh]">{local === "ru" ? "Новости" : "News"}</h1>
                <ul>
                    {news.map((item, index) => <li key={index} className="m-3">
                        <h2 className="font-bold">{item[local].title}</h2>
                        <p>{item[local].description}</p>
                        <div> {item[local].date}</div>
                    </li>)}
                </ul>
                <NewsList ln={local}/>
            </section>
        </main>
    )
}

//params.locale
// import {cookies} from "next/headers";
//
// import {redirect} from "next/navigation";
//
// export default function Home() {
//     const cookieStore = cookies();
//     const lang = cookieStore.get('lang');
//     if (lang) redirect(`/${lang.value}`);
//     else redirect(`/ru`);
// }

