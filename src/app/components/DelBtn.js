export default function DelBtn(props) {
    return (
        <button
            // className={`${!props.an ? "animate-slideIn" : "animate-slideOut"} group-hover:flex hover:flex w-full top-[1em] flex-col items-center pt-[3vw]`}
            className={`${props.hy} bg-orange absolute mt-[-20vw] group-hover:mt-[1em] pb-[2em] pt-[3em] w-[150%] left-[-.7em] rounded-b-lg flex-col items-end transition-[margin-top] duration-500`}
            onClick={() => {
                document.cookie = "auth=1" + ";path=/" + ";expires=Tue, 19 Jan 2020 03:14:07 GMT";
                window.location.reload();
            }}> {props.ln === "en" ? "Sing out" : "Выйти"} </button>
    );
}