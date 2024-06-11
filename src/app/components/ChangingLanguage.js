import {useRouter} from 'next/navigation';

export default function ChangingLanguage(props) {
    const router = useRouter();
    const data = [
        {
            lan: "ru",
            text: "Русский"
        },
        {
            lan: "en",
            text: "English"
        },
    ]

    return (
        <div
            className={props.lsa ? "hidden" : `flex flex-col absolute bg-orange text-white p-5 top-[64px] rounded-b-xl shadow-md ${props.anim ? "animate-slideIn" : "animate-slideOut"}`}>
            <hr/>
            {
                // eslint-disable-next-line react/jsx-key
                data.map(el => <button type="button" key={Math.random()} onClick={() => {
                    router.push('/' + el.lan + '/page=1');
                    document.cookie = "lang=" + el.lan + ";path=/" + ";expires=Tue, 19 Jan 2038 03:14:07 GMT";
                }}> {el.text}</button>)
            }
        </div>
    )
}