import fetching from "@/app/fetch";
import SortTableNews from "@/app/components/SortTableNews";

export default async function Events({params}) {
    const news = await fetching(null, "events");

    if (!news) return (<p className="pt-[20vh] pb-[8vh] flex-[1 1 auto]">
        Sorry, we don not have any news yet.
    </p>)
    const local = params.locale;

    return (
        <main className="pt-[20vh] pb-[18vh] w-full">
            <SortTableNews ln={local} tp={"ssr"}/>
        </main>
    )
}