import fetching from "@/app/fetch";
import SortTableNews from "@/app/components/SortTableNews";

export default async function Events({params}) {
    const news = await fetching(null, "events");

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
            <SortTableNews ln={local} nw={news} lb={lib}/>
        </main>
    )
}