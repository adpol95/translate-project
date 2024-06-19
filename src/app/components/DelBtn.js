export default function DelBtn(props) {
    return (
        <button
            className={`${props.st} ${props.an ? "animate-slideIn" : "animate-slideOut"} hidden group-hover:flex hover:flex w-full top-[1em] flex-col items-center pt-[3vw] hover:text-yellow transition-colors delay-30 active:text-gray-dark`}
            onClick={() => {
                document.cookie = "auth=" + props.cook.replace(/OK/, "NOT") + ";path=/" + ";expires=Tue, 19 Jan 2020 03:14:07 GMT";
                window.location.reload();
            }}> {props.ln === "en" ? "Sing out" : "Выйти"} </button>
    );
}
