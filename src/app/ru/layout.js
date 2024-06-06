import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Layout({ children }) {
    return (
        <>
            <Header ln="ru"/>
            {children}
            <Footer ln="ru"/>
        </>
    )
}