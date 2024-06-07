import {NextResponse} from "next/server";
import data from "./data.json";

export async function POST(request) {

    return NextResponse.json({
        data
    })
}