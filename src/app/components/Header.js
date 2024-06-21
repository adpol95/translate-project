import Link from "next/link";
import PopUpMenu from "@/app/components/PopUpMenu";
import SignIn from "@/app/components/SignIn";

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
                ru: "События",
                en: "Events",
            }
        }
    ]

    return (
        <header className="bg-orange text-white fixed top-0 right-0 left-0 rounded-b-xl shadow-md z-20 z:text-[1.5vw] xl:text-[1vw]">
            <nav className="w-full">
                <ul className="flex justify-around items-center">
                    {data.map((el, i) => <li key={el.id}>
                        <Link href={i === 2 ? `${process.env.url}${props.ln}/events` : i === 0 ? `${process.env.url}${props.ln}/news` : ""} className="hover:text-yellow transition-colors delay-30 active:text-gray-dark">
                            {el.text[props.ln.slice()]}
                        </Link>
                    </li>)}
                    <SignIn ln={props.ln}/>
                    <PopUpMenu ln={props.ln}/>
                </ul>
            </nav>
        </header>
    )
}
