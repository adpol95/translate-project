import {useRouter} from 'next/navigation';

export default function ChangingLanguage(props) {
    const router = useRouter();

    return (
        <div className={props.lsa ? "hidden" : `flex flex-col absolute bg-orange text-white p-5 top-[64px] rounded-b-xl shadow-md ${props.anim ? "animate-slideIn" : "animate-slideOut"}`}>
            <hr/>
            <button type="button" onClick={() => {
                router.push('/ru');
                document.cookie = "lang=ru"+ ";path=/" + ";expires=Tue, 19 Jan 2038 03:14:07 GMT";
            }}>Русский</button>
            <button type="button" onClick={() => {
                router.push('/en');
                document.cookie = "lang=en"+ ";path=/" + ";expires=Tue, 19 Jan 2038 03:14:07 GMT";
            }}>English</button>
            <button type="button" onClick={() => {
                router.push('/fr');
                document.cookie = "lang=fr"+ ";path=/" + ";expires=Tue, 19 Jan 2038 03:14:07 GMT";
            }}>French</button>
        </div>
    )
}