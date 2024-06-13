import fetching from "@/app/fetch";

export default async function Events({params}) {
    const news = await fetching(null, "events");
    const borderStyle = "border-2 border-solid border-gray";
    if (!news) return (<p className="pt-[20vh] pb-[8vh] flex-[1 1 auto]">
        Sorry, we don not have any news yet.
    </p>)
    const local = params.locale;
    const lib = [
        {
            ru: "Январь",
            en: "January"
        },
        {
            ru: "Февраль",
            en: "February"
        },
        {
            ru: "Март",
            en: "March"
        },
        {
            ru: "Апрель",
            en: "April"
        },
        {
            ru: "Май",
            en: "May"
        },
        {
            ru: "Июнь",
            en: "June"
        },
        {
            ru: "Июль",
            en: "July"
        },
        {
            ru: "Август",
            en: "August"
        },
        {
            ru: "Сентябрь",
            en: "September"
        },
        {
            ru: "Октябрь",
            en: "October"
        },
        {
            ru: "Ноябрь",
            en: "November"
        },
        {
            ru: "Декабрь",
            en: "December"
        },
    ]
    return (
        <main className="pt-[20vh] pb-[18vh] flex-[1 1 auto]">
            <section className="flex flex-col items-center justify-between p-[10vh]">
                <h1 className="text-[7vh] font-bold pb-[10vh]">{local === "ru" ? "События" : "Events"}</h1>
                <table className={`table-auto ${borderStyle}`}>
                    <thead className={borderStyle}>
                    <tr className={`borderStyle bg-gray-light font-bold`}>
                        <th className="p-5">{local === "ru" ? "Дата" : "Date"}</th>
                        <th className="p-5">{local === "ru" ? "Событие" : "Event"}</th>
                        <th className="p-5">{local === "ru" ? "Описание" : "Description"}</th>
                    </tr>
                    </thead>
                    <tbody className={borderStyle}>
                    {news.map((item) => {
                        const div = item[local].date.split("-");
                        return <tr key={item.id} className={`${borderStyle}`}>
                            <td key={item} className="p-5">{`${div[div.length - 1]} ${lib[div[div.length - 2] - 1][local]}`}</td>
                            <td key={item} className="p-5">{item[local].title}</td>
                            <td key={item} className="p-5">{item[local].description}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </section>
        </main>
    )
}