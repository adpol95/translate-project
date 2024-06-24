import SortTableNews from "@/app/components/SortTableNews";

export default function Authorization({params}) {

    return (
        <main className="pt-[20vh] pb-[18vh] w-full">
        <SortTableNews ln={params.locale} tp={"rdx"}/>
        </main>
    );
}
