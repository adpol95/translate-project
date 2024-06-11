import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Layout({ children, params }) {
    return (
        <>
            <Header ln={params.locale[0]}/>
            {children}
            <Footer ln={params.locale[0]}/>
        </>
    )
}