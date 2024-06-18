"use server";
export default async function fetching(pg, tp, sr) {
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
                    type: tp,
                    sort: sr,
                }),
                cache: "no-store",
            });
        data = await res.json();
    } catch (error) {
        console.log(error);
    }
    return data
}