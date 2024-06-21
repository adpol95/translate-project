import {useRouter} from "next/navigation";

export default function DelBtn(props) {
    const router = useRouter();
    return (
        <div className="absolute bg-orange rounded-b-lg mt-[-20vw] hover:mt-[2.5em] group-hover:mt-[2.5em] py-[2em] w-[100%] transition-[margin-top] duration-500 text-center">
            <button
                className={`${props.hy}`}
                onClick={() => {
                    document.cookie = `${props.user.replace(/OK/, "NOT")};path=/;expires=Tue, 19 Jan 2038 03:14:07 GMT`;
                    router.push(`/`);
                    window.location.reload();
                }}> {props.ln === "en" ? "Out" : "Выйти"} </button>
        </div>
    );
}