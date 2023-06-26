import Header from "@/new-portfolio/components/Header";
import Footer from "@/new-portfolio/components/Footer";
import Development from "@/new-portfolio/components/Development";


const MainLayout = ({children, className}: { children: any, className?: string }): JSX.Element => {
    return (
        <main className={`sm:mx-12 mx-3 overflow-hidden ${className}`}>
            <Header/>
            <section data-scroll-container>
                {children}
            </section>
                <Development />
            <Footer/>
        </main>
    )
}

export default MainLayout;