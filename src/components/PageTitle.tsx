import sass from "@/new-portfolio/styles/components/PageTitle.module.scss";

import type { JSX } from "react";
import Md from "./Md";
import { styles } from "../styles/Basics";

const PageTitle = ({
  title,
  description = "",
  isPost,
}: {
  title: string | undefined;
  description?: string | undefined;
  isPost?: boolean | undefined;
}): JSX.Element => {
  return (
    <section className={`${sass.Head}`}>
      <h2 className={`${sass.Title} heading-text`}>{title}</h2>
      <Md
        className={`${sass.Description} basic-text ${!isPost && "md:w-1/2"}`}
        markdown={description}
      ></Md>
      <style scoped jsx>
        {styles}
      </style>
    </section>
  );
};

export default PageTitle;
