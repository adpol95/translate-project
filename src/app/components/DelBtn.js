import {useState} from "react";
import useFetch from "@/app/hooks/useCookieFetch";

export default function DelBtn(props) {
    const [stateUser, setStateUser] = useState({
        change: false,
        value: null
    });
    const {error} = useFetch(props.url, props.user.name.slice(5), stateUser.change, stateUser.value, false);

    if (error) {
        //return <p className="mt-[5em]">Error: {error.message}</p>;
        console.log(error.message)
    }
    return (
        <div
            className="absolute bg-orange rounded-b-lg mt-[-20vw] hover:mt-[2.5em] group-hover:mt-[2.5em] py-[2em] w-[100%] transition-[margin-top] duration-500 text-center">
            <button
                className={`${props.hy}`}
                onClick={() => {
                    // document.cookie = `${props.user.replace(/OK/, "NOT")};path=/;expires=Tue, 19 Jan 2038 03:14:07 GMT`;
                    setStateUser({
                        change: true,
                        value: props.user.value.replace(/OK/, "NOT")
                    })
                }}> {props.ln === "en" ? "Out" : "Выйти"} </button>
        </div>
    );
}