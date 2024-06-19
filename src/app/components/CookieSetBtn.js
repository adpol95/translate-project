export default function CookieSetBtn(props) {
    return (
        <button onClick={() => {
            if (!props.name || !props.ps || !props.cnPs) alert(props.ln === "en" ? "Some fields is empty, fill them out" : "Не все поля были заполненны, заполните все поля");
            else if (props.ps !== props.cnPs) alert(props.ln === "en" ? "Confirm password not match, try again" : "Пароль подтверждения не соответствует, попробуйте еще раз");
            else document.cookie = "auth=" + props.name + "?status=OK" + "?" + props.ps + ";path=/" + ";expires=Tue, 19 Jan 2038 03:14:07 GMT";
        }}>
            {props.ln === "en" ? "Submit" : "Подтвердить"}
        </button>
    );
}
