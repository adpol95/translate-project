export default async function fetching(pg) {
    let data = null;

    try {
        const res = await fetch("http://localhost:3000/api/chat-gpt",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    page: pg,
                }),
                cache: "no-store",
            });
        data = await res.json();
    } catch (error) {
        console.log(error);
    }
    return data
}