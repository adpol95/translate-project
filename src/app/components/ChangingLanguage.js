import {usePathname, useRouter} from 'next/navigation';

export default function ChangingLanguage(props) {
    const router = useRouter();
    const path = usePathname();
    const data = [
        {
            lan: "ru",
            text: "Русский"
        },
        {
            lan: "en",
            text: "English"
        },
    ];
    const lnChanger = (el) => {
        router.push('/' + el.lan + path.slice(path.indexOf(props.ln) + props.ln.length));
        document.cookie = "lang=" + el.lan + ";path=/" + ";expires=Tue, 19 Jan 2038 03:14:07 GMT";
    }

    return (
        <div
            className={props.lsa ? "hidden" : `flex flex-col absolute bg-orange text-white p-5 top-[99%] rounded-b-lg rounded-t-[-200px] shadow-md ${props.anim ? "animate-slideIn" : "animate-slideOut"}`}>
            {
                // eslint-disable-next-line react/jsx-key
                data.map(el => <button type="button" key={Math.random()} onClick={() => lnChanger(el)}
                                       className="hover:text-yellow transition-colors delay-30 active:text-gray-dark"> {el.text}</button>)
            }
        </div>
    )
}