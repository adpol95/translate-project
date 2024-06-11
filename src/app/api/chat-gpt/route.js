import {NextResponse} from "next/server";
import data from "./data.json";

export async function POST() {
    // const news = [data.slice(0, 11), data.slice(11)];
    // const res = await request.json();
    // const currentPage = await news[res.page];
    return NextResponse.json(data)
}