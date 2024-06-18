import "./globals.css";
import {inter} from '@/app/ui/fonts';
import "./reset-default-browser.css";
import StoreProvider from "@/app/StoreProvider";


export const metadata = {
    title: "News Project",
    description: "News",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${inter.className} flex flex-col items-center justify-between z:text-[2.5vw] sm:text-[1rem] `}>
        <StoreProvider>
            {children}
        </StoreProvider>
        </body>
        </html>
    );
}
