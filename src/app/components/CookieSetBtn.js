export default function CookieSetBtn(props) {
    return (
        <button onClick={(event) => {
            const alrtPrvDef = (text) => {
                event.preventDefault();
                alert(text);
            }
            if (!props.name || !props.ps || props.regState && !props.cnPs) alrtPrvDef(props.ln === "en" ? "Some fields is empty, fill them out" : "Не все поля были заполненны, заполните все поля");
            else if (props.regState && props.ps !== props.cnPs) alrtPrvDef(props.ln === "en" ? "Confirm password not match, try again" : "Пароль подтверждения не соответствует, попробуйте еще раз");
            else if (!props.regState && !props.auth) alrtPrvDef(props.ln === "en" ? "User doesn't exist, register new user" : "Пользователь не найден, зарегестрируйте пользователя");
            else document.cookie = "auth=" + props.name + "?status=OK" + "?" + props.ps + ";path=/" + ";expires=Tue, 19 Jan 2038 03:14:07 GMT";
        }} className={`${props.hy} mt-[1em]`}>
            {props.ln === "en" ? "Sign in" : "Войти"}
        </button>
    );
}

