import Link from "next/link";
//components
import Md from "@/new-portfolio/components/Md";
//styles
import sass from "@/new-portfolio/styles/sections/HomePage/About.module.scss";
import { styles } from "@/new-portfolio/styles/Basics";
// utils
import { AboutPageMdContent } from "@/new-portfolio/utils";

const About = () => {
  return (
    <section data-scroll className={`${sass.About} mt-32 h-auto`}>
      <h2
        className={`${sass.Heading} heading-text`}
        data-scroll
        data-scroll-speed="1.5"
      >
        Men haqimda
      </h2>
      <div className={`${sass.Block} flexbox `} data-scroll>
        <div className={`${sass.Text}`} data-scroll data-scroll-speed="4">
          <Md
            className={`basic-text text-lg mb-10`}
            markdown={AboutPageMdContent.substring(0, 780)}
          />
          <Link href={`/about`} className={`${sass.Btn} btn`}>
            Davomi qani !?
          </Link>
        </div>

        <img
          src="/personal/IMG_20240713_201036_180.jpg"
          className={`${sass.img}`}
          data-scroll
        />
      </div>
      <style scoped jsx>
        {styles}
      </style>
    </section>
  );
};
export default About;
