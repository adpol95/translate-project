import {NextResponse} from "next/server";
import data from "./data.json";

export async function POST(request) {
    // const news = [data.slice(0, 11), data.slice(11)];
    // const currentPage = await news[request.headers.get("page")];
    return NextResponse.json(data)
}