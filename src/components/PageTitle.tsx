import sass from "@/new-portfolio/styles/components/PageTitle.module.scss";

const PageTitle = (
    {
        title,
        description = "Lorem ipsum dolor sit amet, consectetur adipisicing\n" +
        "                    elit. Amet culpa eaque eveniet facilis magni nesciunt nostrum, omnis perferendis quibusdam suscipit.\n" +
        "                    Nam, qui reprehenderit?"
    }: {
        title?: string | undefined,
        description?: string | undefined
    }): JSX.Element => {
    return (
        <section className={`${sass.Head}`}>
            <h2 className={`${sass.Title} heading-text`}>{title}</h2>
            <p className={`${sass.Description} basic-text`}>{description}</p>
        </section>
    )
}

export default PageTitle;