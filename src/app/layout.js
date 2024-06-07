import "./globals.css";
import {inter} from '@/app/ui/fonts';
import "./reset-default-browser.css";


export const metadata = {
    title: "Translate Project",
    description: "Translate on 3 different language",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${inter.className} flex flex-col items-center justify-center h-[100vh]`}>
        {children}
        </body>
        </html>
    );
}
