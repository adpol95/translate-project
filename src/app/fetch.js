"use server";
export default async function fetching(pg, tp) {
    let data = null;

    try {
        const res = await fetch(`${process.env.url}api/chat-gpt`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    page: pg,
                    type: tp
                }),
                cache: "no-store",
            });
        data = await res.json();
    } catch (error) {
        console.log(error);
    }
    return data
}