"use client";
import {useAppSelector} from "@/app/lib/hooks";
import SortTableNews from "@/app/components/SortTableNews";
import {useRouter} from "next/navigation";

export default function Authorization({params}) {
    const router = useRouter();
    const currentFav = useAppSelector(state => state.favorite.currentFavorite);
    if (!currentFav.user) {
        router.push(`/`);
        return <></>
    }
    return (
        <main className="pt-[20vh] pb-[18vh] w-full">
        <SortTableNews ln={params.locale} tp={"rdx"}/>
        </main>
    );
}
