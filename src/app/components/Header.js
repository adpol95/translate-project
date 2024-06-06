import PopUpMenu from "@/app/components/PopUpMenu";

export default function Header(props) {
    return (
        props.ln === "en" ?
            <header
                className="flex flex-row justify-around bg-orange text-white p-5 fixed top-0 right-0 left-0 rounded-b-xl">
                <button>News</button>
                <button>Weather</button>
                <button>Traffic jams</button>
                <PopUpMenu ln={props.ln}/>
            </header> : <header
                className="flex flex-row justify-around bg-orange text-white p-5 fixed top-0 right-0 left-0 rounded-b-xl">
                <button>Новости</button>
                <button>Погода</button>
                <button>Пробки</button>
                <PopUpMenu  ln={props.ln}/>
            </header>
    )
}