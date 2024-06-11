"use client";
import {useRouter, usePathname} from "next/navigation";

export default function PaginationNews(props) {
    const router = useRouter();
    const pathName = usePathname();
    const numPages = ["1", "2"];
    const btnStyle = "bg-orange text-white px-[1.2em] py-[.8em] rounded-[50px] cursor-pointer shadow-md hover:text-[1.3em] active:bg-yellow transition-font-size duration-150";
    return (
        <div onClick={(e) => {
            if (e.target.type === "submit") {
                router.push(`/${props.ln}/page=${e.target.innerText}`);
            }
        }} className="flex items-center justify-center gap-2 bg-gray px-[1.7em] py-[.7em] rounded-[300px] cursor-pointer shadow-md mt-[1.5vw]">
            {
                numPages.map((page, i) => <button key={i} type="submit"
                                                  className={pathName[pathName.length - 1] === page ? "bg-orange-pick " + btnStyle : btnStyle}>{page}</button>)}

        </div>
    )
}