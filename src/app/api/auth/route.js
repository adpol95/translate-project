import {cookies} from "next/headers";
import {NextResponse} from "next/server";


export async function GET() {
    const cookieStore = cookies()
    return NextResponse.json(JSON.stringify(cookieStore.getAll()));
}

export async function POST(request) {
    const body = await request.json();
    const cookieStore = cookies();
    const haveCookie = cookieStore.get("auth|" + body.name);

    if (body.chngUsr) {
        cookies().set("auth|" + body.name, body.value);
        return NextResponse.json(JSON.stringify({name: "auth|" + body.name, value: body.value, path: "/"}))
    }
    return NextResponse.json(JSON.stringify(haveCookie ? haveCookie : "Not having this user"));
}