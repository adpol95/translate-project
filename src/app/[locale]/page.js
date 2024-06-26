import Link from "next/link";

export const metadata = {
    title: "Home page",
    description: "Generated for Home page",
};
export default async function Home({params}) {
    return (
        <main className="pt-[30vh] pb-[18vh] flex-[1 1 auto]">
            <section>
                <Link href={`${process.env.url}${params.locale}/news`} className="text-[7vh] font-bold pb-[10vh] hover:text-orange transition-colors delay-30 active:text-orange-pick">
                    <h1>
                        {params.locale === "ru" ? "Новости" : "News"}
                    </h1>
                </Link>
            </section>
        </main>
    )
}

