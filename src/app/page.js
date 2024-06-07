import {cookies} from "next/headers";

import {redirect} from "next/navigation";

export default function Home() {
    const cookieStore = cookies();
    const lang = cookieStore.get('lang');
    if (lang) redirect(`/${lang.value}`);
    else redirect(`/ru`);
}
