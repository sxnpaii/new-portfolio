import Head from "next/head";
import MainLayout from "@/new-portfolio/components/MainLayout";
import PageTitle from "@/new-portfolio/components/PageTitle";
// styles
import sass from "@/new-portfolio/styles/pages/Microblog.module.scss"

const Microblog = () => {
    return(
        <MainLayout>
            <Head>
                <title>Микроблог || SXNPAII's Universe 🌌</title>
                <meta property="og:title" content={`Микроблог || SXNPAII's Universe 🌌`} />
                <meta property="og:image" content={`/personal/AboutPageImg.jpg`} />
            </Head>
            <PageTitle title={`Микроблог`}/>
            <section className={`${sass.Microblog} flexbox`}>
                <h3 className={`${sass.h3} basic-text`}>Раздел (Секция) в разработке Простите за неудобности : )</h3>
            </section>
        </MainLayout>
    )
}

 export default Microblog