//components
import Md from "../components/Md";
import MainLayout from "@/new-portfolio/components/MainLayout";
import Head from "next/head";
// styles
import sass from "@/new-portfolio/styles/pages/About.module.scss";
import { styles } from "@/new-portfolio/styles/Basics";
//utils
import { AboutPageMdContent } from "@/new-portfolio/utils";

const About = (): JSX.Element => {
  return (
    <MainLayout>
      <Head>
        <title>Обо мне || SXNPAII's Universe 🌌</title>
        <meta
          property="og:title"
          content={`Обо мне || SXNPAII's Universe 🌌`}
        />
        <meta property="og:image" content={`/personal/AboutPageImg.jpg`} />
      </Head>
      {/*<PageTitle title={`Немножко обо мне`} description={''}/>*/}
      {/*body*/}
      <img className={`${sass.Img}`} src="/personal/AboutPageImg.jpg" alt="" />
      <Md className={`basic-text text-center `} markdown={AboutPageMdContent} />
      <style jsx>{styles}</style>
    </MainLayout>
  );
};

export default About;
