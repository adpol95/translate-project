import Link from "next/link";

export default async function Home({params}) {
    console.log(params.locale)
    return (
        <main className="pt-[30vh] pb-[18vh] flex-[1 1 auto]">
            <section>
                <Link href={`http://localhost:3000/${params.locale}/news`} className="text-[7vh] font-bold pb-[10vh] hover:text-orange transition-colors delay-30 active:text-orange-pick">
                    <h1>
                        {params.locale === "ru" ? "Новости" : "News"}
                    </h1>
                </Link>
            </section>
        </main>
    )
}

