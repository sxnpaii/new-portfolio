import { Portfolio } from "@/new-portfolio/xata";
import sass from "@/new-portfolio/styles/sections/HomePage/PortfolioSc.module.scss";

const Portfolio = ({ records }: { records: Portfolio[] }): JSX.Element => {
    return (
        <section className={`${sass.Portfolio} mt-32`} data-scroll-container>
            <h2 className={`${sass.Heading} heading-text`} data-scroll data-scroll-speed="1">Портфолио</h2>
            <div className={`${sass.Block}`}>
                {records.map((record) => (
                    <div className={`${sass.Work}`} key={record.id} data-scroll>
                        <img src={record.source} alt="" />
                        <div className={`${sass.hovered}`}>
                            <h4 className={`heading-text`}>{record.project}</h4>
                            <p className={`basic-text`}>{record.description}</p>
                            <div className={`${sass.btns} flexbox`}>
                                <a className={`btn text-sm md:text-base`} href={record.gh_repo}>Github Repo</a>
                                <a className={`btn text-sm md:text-base`} href={record.file_in_tg}>File in Tg</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;