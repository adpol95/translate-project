import {useRouter} from "next/navigation";

export default function DelBtn(props) {
    const router = useRouter();
    return (
        <button
            className={`${props.hy} bg-orange absolute mt-[-20vw] group-hover:mt-[1em] pb-[2em] pt-[3em] w-[100%] rounded-b-lg flex-col items-end transition-[margin-top] duration-500`}
            onClick={() => {
                document.cookie =  `${props.user.replace(/OK/, "NOT")};path=/;expires=Tue, 19 Jan 2038 03:14:07 GMT`;
                router.push(`/`);
                window.location.reload();
            }}> {props.ln === "en" ? "Out" : "Выйти"} </button>
    );
}