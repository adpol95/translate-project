import { useRouter } from 'next/navigation';

export default function ChangingLanguage(props) {
    const router = useRouter();
    return (
        <div className={props.lsa ? "hidden" : "flex flex-col"}>
            <hr/>
            <button type="button" onClick={() => router.push('/ru')}>Русский</button>
            <button type="button" onClick={() => router.push('/en')}>English</button>
        </div>
    )
}