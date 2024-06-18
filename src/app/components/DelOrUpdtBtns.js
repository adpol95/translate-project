export default function DelOrUpdtBtns(props) {
    return (
        <div className="flex flex-col">
            <button onClick={() => {
                document.cookie = "auth=" + props.cook.replace(/OK/,"NOT") + ";path=/" + ";expires=Tue, 19 Jan 2036 03:14:07 GMT";;
                window.location.reload();
            }}> {props.ln === "en" ? "Sing out" : "Выйти"} </button>
            <button onClick={() => {
                document.cookie = "auth=" + props.name + "?status=NOT" + ";path=/" + ";expires=Tue, 19 Jan 2000 03:14:07 GMT";
                window.location.reload();
            }}> {props.ln === "en" ? "Delete" : "Удалить"} </button>
        </div>
    );
}
