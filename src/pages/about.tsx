//components
import MainLayout from "@/new-portfolio/components/MainLayout";
import PageTitle from "@/new-portfolio/components/PageTitle";
import Head from "next/head";

const About = (): JSX.Element => {
    return (
        <MainLayout>
            <Head>
                <title>Обо мне || SXNPAII's Universe 🌌</title>
                <meta property="og:title" content={`Обо мне || SXNPAII's Universe 🌌`}/>
                <meta property="og:image" content={`https://images.unsplash.com/photo-1443037346177-a9dca3e5812e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80`}/>
            </Head>
            {/*<PageTitle title={`Немножко обо мне`} description={''}/>*/}
            {/*body*/}
            <img
                className={`sm:w-[80%] mx-auto my-12`}
                src="https://images.unsplash.com/photo-1443037346177-a9dca3e5812e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt=""/>
            <p className={`basic-text text-justify`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                adipisci culpa, deleniti magni, nam placeat
                possimus provident sequi soluta, vel veniam voluptatem? Amet corporis dicta eius ipsa maiores maxime
                minima saepe, vitae voluptate. Ab ad aliquid atque delectus earum error harum hic in ipsum minima
                officia possimus praesentium quod, sed?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci dignissimos ducimus eum iste nisi nulla optio quia tempore. Animi cupiditate dolore doloremque
                earum eum ex fugit in, nemo quod rem! Ad aperiam, at atque culpa cum cumque, delectus doloribus eius ex
                facilis fuga fugiat iste iusto laudantium natus non perferendis quae quaerat quod sunt tempore veniam,
                vitae voluptas! Aperiam deserunt dolorem dolores eum exercitationem magnam quisquam quo similique vitae
                voluptas! Accusantium ad animi aspernatur, blanditiis cum dignissimos distinctio explicabo hic molestias
                natus quia, quidem repellendus reprehenderit rerum, saepe sunt voluptatibus. Assumenda expedita
                explicabo facilis fuga id natus nesciunt quas, tenetur.</p>
        </MainLayout>)
}


export default About;