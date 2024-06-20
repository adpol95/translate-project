"use client";
import {useAppSelector} from "@/app/lib/hooks";
import SortTableNews from "@/app/components/SortTableNews";

export default function Authorization({params}) {
    return (
        <SortTableNews ln={params.locale} nw={useAppSelector(state => Object.entries(state.favorite.currentFavorite))} tp={"rdx"}/>
    );
}
