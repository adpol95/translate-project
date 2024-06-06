import "./globals.css";
import {inter} from '@/app/ui/fonts';


export const metadata = {
    title: "Translate Project",
    description: "Translate on 3 different language",
};

export default function RootLayout({children}) {
    return (
        <html>
        <body className={`${inter.className} relative`}>
        {children}
        </body>
        </html>
    );
}
