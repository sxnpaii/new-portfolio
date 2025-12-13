import sass from "@/new-portfolio/styles/components/PageTitle.module.scss";

import type { JSX } from "react";

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
      <p className={`${sass.Description} basic-text ${!isPost && "md:w-1/2"}`}>
        {description}
      </p>
    </section>
  );
};

export default PageTitle;
