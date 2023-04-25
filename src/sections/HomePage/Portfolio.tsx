import sass from "@/new-portfolio/styles/sections/HomePage/PortfolioSc.module.scss";

const Portfolio = ({records}: portfolio[]) => {
    return (
        <section className={`${sass.Portfolio} mt-32`}>
            <h2 className={`${sass.Heading} heading-text`} data-scroll>Portfolio</h2>
            <div className={`${sass.Block}`}>
                {records.map((record) => (
                    <div className={`${sass.Work}`} key={record.id} data-scroll>
                        <img src={record.source}  alt="" />
                        <div className={`${sass.hovered}`}>
                            <h4>{record.project}</h4>
                            <p>{record.description}</p>
                            <div className="btns">
                                <a className={`${sass.Btn} btn`} href={record.gh_repo}>Github Repo</a>
                                <a className={`${sass.Btn} btn`} href={record.file_in_tg}>File in Tg</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio;