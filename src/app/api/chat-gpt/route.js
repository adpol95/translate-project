import {NextResponse} from "next/server";
import data from "./data.json";

export async function POST(request) {
    const body = await request.json();
    if (body.type === "events") {
        const endOfYear = [4, 4, 5, 4, 4];
        // let c  = 0;
        const sortByYear = data.map(el => {
            const rndm = Math.floor(Math.random() * 5);
            let year = el.en.date.slice(0, 3);
            if (endOfYear[rndm]) {
                const newYear = year + rndm;
                endOfYear[rndm] = endOfYear[rndm] - 1
                return { ...el, year: newYear};
            } else {
                for (let r = Math.floor(Math.random() * 5); true; r = Math.floor(Math.random() * 5)) {
                    if (r === rndm || endOfYear[r] === 0) continue;
                    else {
                        const newYear = year + r;
                        endOfYear[r] = endOfYear[r] - 1
                        return { ...el, year: newYear};
                    }
                }
            }
        })
        return NextResponse.json(sortByYear.sort((a,b) => a.year - b.year).reverse())
    }
    if (body.type === "exact") {
        return NextResponse.json(data[body.page - 1])
    }
    const dividedNews = [];
    let twoNews = [];
    data.forEach((item, i) => {
        twoNews.push(item);
        if (!Number.isInteger(i / 2)) {
            dividedNews.push(twoNews);
            twoNews = [];
        }
    })
    if (body.page && body.page <= dividedNews.length) {
        return NextResponse.json({news: dividedNews[body.page - 1], pagination: {pages: dividedNews.length}})
    } else return NextResponse.json(null)
}