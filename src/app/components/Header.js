import Link from "next/link";
import PopUpMenu from "@/app/components/PopUpMenu";

export default function Header(props) {
    const rndm = () => Math.random() * 10 + 1;
    const data = [
        {
            id: rndm(),
            text: {
                ru: "Новости",
                en: "News",
                fr: "Nouvelles"
            }
        },
        {
            id: rndm(),
            text: {
                ru: "Погода",
                en: "Weather",
                fr: "Météo"
            }
        },
        {
            id: rndm(),
            text: {
                ru: "Пробки",
                en: "Traffic jams",
                fr: "Embouteillages"
            }
        }
    ]
    return (
        <header className="bg-orange text-white p-5 fixed top-0 right-0 left-0 rounded-b-xl shadow-md">
            <nav className="w-full">
                <ul className="flex justify-around">
                    {data.map(el => <li key={el.id}>
                        <Link href="">
                            {el.text[props.ln]}
                        </Link>
                    </li>)}
                    <PopUpMenu ln={props.ln}/>
                </ul>
            </nav>
        </header>
    )
}
