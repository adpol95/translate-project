import {NextResponse} from "next/server";
import data from "./data.json";

export async function POST(request) {
    const news = [data.slice(0, 11), data.slice(11)];
    const body = await request.json();
    if (body.page && body.page <= news.length) {
        return NextResponse.json(news[body.page - 1])
    } else return NextResponse.json(null)
}