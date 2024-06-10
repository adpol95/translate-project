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
    const res = await fetch("http://localhost:3000/api/chat-gpt",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Page": "0"
            },
            body: JSON.stringify({
                someData: true
            }),
            cache: "no-cache",
        });
    const news = await res.json();
    return (
        <main className="pt-[20vh] pb-[8vh] flex-[1 1 auto]">
            <section className="flex flex-col items-center justify-between">
                <h1 className="text-[7vh] font-bold pb-[10vh]">{params.locale === "ru" ? "Новости" : "News"}</h1>
                <ul>
                    {news.map((item, index) => <li key={index} className="m-3">
                        <h2 className="font-bold">{item[params.locale].title}</h2>
                        <p>{item[params.locale].description}</p>
                        <div> {item[params.locale].date}</div>
                    </li>)}
                </ul>
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

