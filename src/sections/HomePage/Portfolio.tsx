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
          Loyihalar
        </h2>
        <p
          className={`${sass.Description} basic-text`}
          data-scroll
          data-scroll-speed="1.2"
        >
          Ko'rib turganingiz, qilgan ishlarimning parchasi holos. Hammasini <a href="https://github.com/sxnpaii">GitHub</a>da ko'rishingiz mumkin
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
                <Md className={`basic-text text-lg`} markdown={record.description} />
                <div className={`${sass.btns} flexbox`}>
                  {record.gh_repo !== null && (
                    <button>
                      <a
                        className={`btn text-sm md:text-base`}
                        href={record.gh_repo}
                      >
                        Github
                      </a>
                    </button>
                  )}

                  {record.file_in_tg !== null && (
                    <button>
                      <a
                        className={`btn text-sm md:text-base `}
                        href={record.file_in_tg}
                      >
                        Telegram
                      </a>
                    </button>
                  )}
                  {record.project_url !== null && (
                    <button>
                      <a
                        className={`btn text-sm md:text-base`}
                        href={record.project_url}
                      >
                        Loyiha havolasi
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
