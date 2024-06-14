import fetching from "@/app/fetch";

export default async function Events({params}) {
    const news = await fetching(null, "events");
    const borderStyle = "border-2 border-solid border-gray rounded-xl ";
    if (!news) return (<p className="pt-[20vh] pb-[8vh] flex-[1 1 auto]">
        Sorry, we don not have any news yet.
    </p>)
    const local = params.locale;
    const lib = [
        {
            ru: "Января",
            en: "January"
        },
        {
            ru: "Февраля",
            en: "February"
        },
        {
            ru: "Марта",
            en: "March"
        },
        {
            ru: "Апреля",
            en: "April"
        },
        {
            ru: "Мая",
            en: "May"
        },
        {
            ru: "Июня",
            en: "June"
        },
        {
            ru: "Июля",
            en: "July"
        },
        {
            ru: "Августа",
            en: "August"
        },
        {
            ru: "Сентября",
            en: "September"
        },
        {
            ru: "Октября",
            en: "October"
        },
        {
            ru: "Ноября",
            en: "November"
        },
        {
            ru: "Декабря",
            en: "December"
        },
    ]
    return (
        <main className="pt-[20vh] pb-[18vh] w-full">
            <section className="flex flex-col items-center justify-between p-[10vh]">
                <h1 className="text-[7vh] font-bold pb-[10vh]">{local === "ru" ? "События" : "Events"}</h1>
                <table className={`table-auto ${borderStyle} z:text-[1.5vw] xl:text-[.8vw] overflow-x-auto`}>
                    <thead className={borderStyle}>
                    <tr className={`${borderStyle} bg-gray-light font-bold`}>
                        <th className="p-5 min-w-[15vw]">{local === "ru" ? "Дата" : "Date"}</th>
                        <th className="p-5">{local === "ru" ? "Событие" : "Event"}</th>
                        <th className="p-5">{local === "ru" ? "Описание" : "Description"}</th>
                    </tr>
                    </thead>
                    <tbody className={borderStyle}>
                    {news.map((item, i) => {
                        const div = item[local].date.split("-");
                        return <>
                            {i === 0 || item.year - news[i - 1].year ?
                                <tr key={item.id} className={`${borderStyle} h-[3.5vw] relative`}>
                                    <td className="font-bold absolute left-0 right-0 top-[25%] text-center">{item.year}</td>
                                </tr>
                                : ""}
                            <tr key={item.id} className={`${borderStyle}`}>
                                <td className="p-2 text-center align-middle">{`${div[div.length - 1]} ${lib[div[div.length - 2] - 1][local]}`}</td>
                                <td className="p-5 text-center align-middle">{item[local].title}</td>
                                <td className="p-5 text-center align-middle">{item[local].description}</td>
                            </tr>
                        </>
                    })}
                    </tbody>
                </table>
            </section>
        </main>
    )
}