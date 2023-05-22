import Header from "@/new-portfolio/components/Header";
import Footer from "@/new-portfolio/components/Footer";


const MainLayout = ({children, className}: { children: any, className?: any }): JSX.Element => {
    return (
        <main className={`sm:mx-12 mx-3 overflow-hidden ${className}`}>
            <Header/>
            <section data-scroll-container>
                {children}
            </section>
            <Footer/>
        </main>
    )
}

export default MainLayout;