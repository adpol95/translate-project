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
            }
        },
        {
            id: rndm(),
            text: {
                ru: "Погода",
                en: "Weather",
            }
        },
        {
            id: rndm(),
            text: {
                ru: "Пробки",
                en: "Traffic jams",
            }
        }
    ]

    return (
        <header className="bg-orange text-white p-6 fixed top-0 right-0 left-0 rounded-b-xl shadow-md z-20">
            <nav className="w-full">
                <ul className="flex justify-around">
                    {data.map(el => <li key={el.id}>
                        <Link href="">
                            {el.text[props.ln.slice()]}
                        </Link>
                    </li>)}
                    <PopUpMenu ln={props.ln}/>
                </ul>
            </nav>
        </header>
    )
}
