import Md from "@/new-portfolio/components/Md";
import { Portfolio } from "@/new-portfolio/xata/xata";
import sass from "@/new-portfolio/styles/sections/HomePage/PortfolioSc.module.scss";

const Portfolio = ({ records }: { records: Portfolio[] }): JSX.Element => {
  return (
    <section className={`${sass.Portfolio} mt-32`} data-scroll-container>
      <div className={`${sass.Head}`} data-scroll>
        <h2
          className={`${sass.Heading} heading-text`}
          data-scroll
          data-scroll-speed="1"
        >
          Портфолио
        </h2>
        <p
          className={`${sass.Description} basic-text`}
          data-scroll
          data-scroll-speed="1.2"
        >
          Эти примеры всего лишь "куски" моей работы, остальное вы можете
          увидеть на <a href="https://github.com/sxnpaii">GitHub</a> профиле
        </p>
      </div>
      <div className={`${sass.Block}`}>
        {records.map((record) => (
          <div
            className={`${sass.Work}`}
            key={record.id}
            data-scroll
            style={{
              background: `url(${record.source}) no-repeat center / cover`,
            }}
          >
            <img src={record.source} alt="" />
            <div className={`${sass.hovered}`}>
              <h4 className={`heading-text`}>{record.project}</h4>
              <Md className={`basic-text`} markdown={record.description} />
              <div className={`${sass.btns} flexbox`}>
                <a className={`btn text-sm md:text-base`} href={record.gh_repo}>
                  Github Repo
                </a>
                <a
                  className={`btn text-sm md:text-base`}
                  href={record.file_in_tg}
                >
                  Архив в Телеграме
                </a>
                <a
                  className={`btn text-sm md:text-base`}
                  href={record.project_url}
                >
                  Сам Проект
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
