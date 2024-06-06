import Link from "next/link";

export default function Footer(props) {
    const data = [
        {
            lang: 'ru',
            list: ["Документация", "GitHub", "Analytics", "Contacts"]
        },
        {
            lang: 'en',
            list: ["Docs", "GitHub", "Analytics", "Contacts"]
        },
        {
            lang: 'fr',
            list: ["Documentation", "GitHub", "Analytique", "Contacts"]
        },
    ];
    return (
        <footer className="bg-yellow p-5 rounded-t-xl absolute bottom-0 left-0 right-0 shadow-md">
            <nav className="w-full">
                <ul className="flex justify-around">
                    {data.find(el => el.lang === props.ln).list.map(el => <li key={Math.random() * 10 + 1}>
                        <Link href="">
                            {el}
                        </Link>
                    </li>)}
                </ul>
            </nav>
        </footer>
    )
}