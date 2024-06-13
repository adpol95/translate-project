import {NextResponse} from "next/server";
import data from "./data.json";

export async function POST(request) {
    const body = await request.json();
    console.log(body.page)
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