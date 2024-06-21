import {useRouter} from "next/navigation";

export default function CookieSetBtn(props) {
    const user = document.cookie.split(";").find(el => el.includes(props.name));
    const router = useRouter();
    return (
        <button onClick={(event) => {
            event.preventDefault();
            const alrtPrvDef = (text) => {
                alert(text);
            }
            if (!props.name || !props.ps || props.regState && !props.cnPs) alrtPrvDef(props.ln === "en" ? "Some fields is empty, fill them out" : "Не все поля были заполненны, заполните все поля");
            else if (props.regState && props.ps !== props.cnPs) alrtPrvDef(props.ln === "en" ? "Confirm password not match, try again" : "Пароль подтверждения не соответствует, попробуйте еще раз");
            else if (!props.regState && !user) alrtPrvDef(props.ln === "en" ? "User doesn't exist, register new user" : "Пользователь не найден, зарегестрируйте пользователя");
            else if (!props.regState && user.slice(user.lastIndexOf("?") + 1) !== props.ps) alrtPrvDef(props.ln === "en" ? "Password incorrect, type correct password" : "Не верный пароль, введите корректный")
            else {
                document.cookie = (props.regState ? "auth?" + props.name + "=status=OK" + "?favorite=" + "?" + props.ps : user.replace(/NOT/, "OK")) + ";path=/;expires=Tue, 19 Jan 2038 03:14:07 GMT";
                router.push(`/authorization`);
                window.location.reload();
            }
        }} className={`${props.hy} mt-[1em]`}>
            {props.ln === "en" ? "Sign in" : "Войти"}
        </button>
    );
}

