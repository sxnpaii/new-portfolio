import Header from "@/new-portfolio/components/Header";


const MainLayout = ({ children }): JSX.Element => {
    return (
        <main className="sm:mx-12 mx-3 overflow-hidden" >
            <Header />
            <section data-scroll-container>
            {children}
            </section>
        </main>
    )
}

export default MainLayout;