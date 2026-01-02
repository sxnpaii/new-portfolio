//components
import Md from "../components/Md";
import MainLayout from "@/new-portfolio/components/MainLayout";
import Head from "next/head";
// styles
import sass from "@/new-portfolio/styles/pages/About.module.scss";
import { styles } from "@/new-portfolio/styles/Basics";
//utils
import { AboutPageMdContent } from "@/new-portfolio/utils";

import type { JSX } from "react";

const About = (): JSX.Element => {
  return (
    <MainLayout>
      <Head>
        <title>Men haqimda || SXNPAII's Universe 🌌</title>
        <meta
          property="og:title"
          content={`Men haqimda || SXNPAII's Universe 🌌`}
        />
        <meta property="og:image" content={`/personal/AboutPageImg.jpg`} />
      </Head>
      {/*body*/}
      <img className={`${sass.Img}`} src="/personal/AboutPageImg.jpg" alt="Abdulkhayev Khurshid" />
      <Md className={`basic-text md:w-3/4  xl:w-1/2 mx-auto text-xl leading-normal`} markdown={AboutPageMdContent} />
      <style scoped jsx>{styles}</style>
    </MainLayout>
  );
};

export default About;
