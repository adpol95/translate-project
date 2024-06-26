import useFetch from "@/app/hooks/useCookieFetch";
import {useState} from "react";
import {redirect, useRouter} from "next/navigation";

export default function CookieSetBtn(props) {
    // const user = props.cookies.find(el => el.name.includes(props.name));
    const [stateUser, setStateUser] = useState({
        change: false,
        value: null
    });
    const {data, error} = useFetch(props.url, props.name, stateUser.change, stateUser.value, true);
    if (error) {
        //return <p className="mt-[5em]">Error: {error.message}</p>;
        console.log(error.message)
    }
    const router = useRouter();
    const formChecker = () => {
        const alrtPrvDef = (text) => {
            alert(text);
        }
        if (!props.name || !props.ps || props.regState && !props.cnPs) alrtPrvDef(props.ln === "en" ? "Some fields is empty, fill them out" : "Не все поля были заполненны, заполните все поля");
        else if (props.regState && props.ps !== props.cnPs) alrtPrvDef(props.ln === "en" ? "Confirm password not match, try again" : "Пароль подтверждения не соответствует, попробуйте еще раз");
        else if (!props.regState && !data.value) alrtPrvDef(props.ln === "en" ? "User doesn't exist, register new user" : "Пользователь не найден, зарегестрируйте пользователя");
        else if (!props.regState && data.value.slice(data.value.lastIndexOf("|") + 1) !== props.ps) alrtPrvDef(props.ln === "en" ? "Password incorrect, type correct password" : "Не верный пароль, введите корректный");
        else {
            setStateUser(
                {
                    change: true,
                    value: props.regState ? `status=OK|favorite=|${props.ps}` : data.value.replace(/NOT/, "OK")
                }
            )
            return router.push(`${process.env.url}${props.ln}/authorization`)
            // document.cookie = (props.regState ? "auth?" + props.name + "=status=OK" + "|favorite=" + "|" + props.ps : user.) + ";path=/;expires=Tue, 19 Jan 2038 03:14:07 GMT";
        }
    }
    return (
        <button onClick={formChecker} className={`${props.hy} mt-[1em]`}>
            {props.ln === "en" ? "Sign in" : "Войти"}
        </button>
    );
}

