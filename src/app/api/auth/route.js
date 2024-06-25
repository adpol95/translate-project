import {cookies} from "next/headers";
import {NextResponse} from "next/server";


export async function GET() {
    const cookieStore = cookies()
    return NextResponse.json(JSON.stringify(cookieStore.getAll()));
}

export async function POST(request) {
    const body = await request.json();
    const cookieStore = cookies();
    const haveCookie = cookieStore.get(body.name);

    if (body.setOn) {
        cookies().set('auth|Jon', body.name);
        return NextResponse.json(JSON.stringify(cookieStore.get("auth|Jon")));
    }
    return NextResponse.json(JSON.stringify(haveCookie ? haveCookie : "Not having this user"));
}