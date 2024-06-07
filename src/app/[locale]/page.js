"use client";
import {useEffect, useState} from "react";

export default function LanguagePic({params}) {
    const data = {
        ru: "С 6 по 9 июня на выводном круге Центра национальных конных традиций на ВДНХ пройдет первенство России по конкуру среди юных всадников, выступающих на лошадях до 150 сантиметров в холке.Официальный портал Мэраи Правительства Москвы",
        en: "From June 6 to 9, the Russian show jumping championship among young riders competing on horses up to 150 centimeters at the withers will be held at the breeding circle of the Center for National Equestrian Traditions at VDNKh. Official portal Mariah of the Moscow Government",
        fr: "Du 6 au 9 juin, le championnat russe de saut d'obstacles parmi les jeunes cavaliers concourant sur des chevaux jusqu'à 150 centimètres au garrot aura lieu au cercle d'élevage du Centre des traditions équestres nationales de VDNKh. Portail officiel Mariah du gouvernement de Moscou."
    }
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch("/api/chat-gpt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                someData: true
            })
        })
            .then((res) => res.json())
            .then(response => {
                setDatas(response.data.news)
            })
    }, []);

    return (
        <main className="pt-[20vh] flex-[1 1 auto]">
            <section>
                <ul>
                    {datas.map((item, index) => <li key={index}>
                        {item[params.locale]}
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

