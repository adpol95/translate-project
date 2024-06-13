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
        Sorry, we don not have any news yet.
    </p>)
    const local = params.locale;
    return (
        <main className="pt-[20vh] pb-[18vh] flex-[1 1 auto]">
            <NewsList ln={local} firstNews={news}/>
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

