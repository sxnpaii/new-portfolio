import sass from "@/new-portfolio/styles/components/PageTitle.module.scss";

const PageTitle = (
    {
        title,
        description = ""
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