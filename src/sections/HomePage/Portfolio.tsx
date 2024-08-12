import Md from "@/new-portfolio/components/Md";
import { Portfolio } from "@/new-portfolio/xata/xata";
import sass from "@/new-portfolio/styles/sections/HomePage/PortfolioSc.module.scss";

const PortfolioSc = ({ records }: { records: Portfolio[] }): JSX.Element => {
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
        {records &&
          records.map((record) => (
            <div
              className={`${sass.Work}`}
              key={record.id}
              data-scroll
              style={{
                background: `url(${record.source}) no-repeat top / cover`,
              }}
            >
              <div className={sass.Ineer}>
                {/* <img src={record.source} alt="" /> */}
                <h4 className={`${sass.ProjectTitle} heading-text `}>
                  {record.project}
                </h4>
                <Md className={`basic-text`} markdown={record.description} />
                <div className={`${sass.btns} flexbox`}>
                  {record.gh_repo !== null && (
                    <button>
                      <a
                        className={`btn text-sm md:text-base`}
                        href={record.gh_repo}
                      >
                        Github Repo
                      </a>
                    </button>
                  )}

                  {record.file_in_tg !== null && (
                    <button>
                      <a
                        className={`btn text-sm md:text-base `}
                        href={record.file_in_tg}
                      >
                        Архив в Телеграме
                      </a>
                    </button>
                  )}
                  {record.project_url !== null && (
                    <button>
                      <a
                        className={`btn text-sm md:text-base`}
                        href={record.project_url}
                      >
                        Сам Проект
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default PortfolioSc;
