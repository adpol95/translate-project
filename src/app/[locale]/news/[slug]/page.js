import fetching from "@/app/fetch";

export default async function News({params}) {
    const item = await fetching(params.slug, "exact");
    if (!item) return (<p className="pt-[20vh] pb-[8vh] flex-[1 1 auto]">
        Sorry, we don not have any news yet.
    </p>)
    const local = params.locale;
    return (
        <main className="pt-[30vh] pb-[18vh] flex-[1 1 auto]">
            <section className="flex flex-col items-center">
                <h1 className="text-[7vh] font-bold pb-[10vh]">{item[local].title}</h1>
                <p className="text-[2vh]">{item[local].description}</p>
                <div className="text-[2vh]"> {item[local].date}</div>
            </section>
        </main>
    )
}