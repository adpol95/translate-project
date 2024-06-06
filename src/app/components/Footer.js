export default function Footer(props) {
    return (
        props.ln === "en" ?
            <footer className="flex justify-around bg-yellow p-5 rounded-t-xl absolute bottom-0 left-0 right-0">
                <div>Docs</div>
                <div>GitHub</div>
                <div>Analytics</div>
                <div>Contacts</div>
            </footer> :
            <footer className="flex justify-around bg-yellow p-5 rounded-t-xl absolute bottom-0 left-0 right-0">
                <div>Документация</div>
                <div>GitHub</div>
                <div>Аналитика</div>
                <div>Контакты</div>
            </footer>
    )
}