import sass from "@/new-portfolio/styles/components/Footer.module.scss"

const Footer = (): JSX.Element => {
    return (
        <footer className={`${sass.Footer}`}>
            <div className={`${sass.line}`}></div>
            <h6 className={` ${sass.Heading} heading-text `}>Abdulkhayev Khurshid</h6>
            <div className={`${sass.Socials}`}>
                <a href="https://github.com/sxnpaii" target="_blank">
                    <img className={`${sass.logo}`} src="/icons/github.svg" alt=""/>
                </a>
                <a href="https://t.me/sxnpaii" target="_blank">
                    <img className={`${sass.logo}`} src="/icons/telegram.svg" alt=""/>
                </a>
                <a href="https://twitter.com/the_sxnpaii" target="_blank">
                    <img className={`${sass.logo}`} src="/icons/twitter-x.svg" alt=""/>
                </a>
                <a href="https://medium.com/@sxnpaii" target="_blank">
                    <img className={`${sass.logo}`} src="/icons/medium.svg" alt=""/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;