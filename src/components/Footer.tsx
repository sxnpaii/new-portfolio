import sass from "@/new-portfolio/styles/components/Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={`${sass.Footer}`}>
      <div className={`${sass.line}`}></div>
      <h6 className={` ${sass.Heading} heading-text `}>Abdulxayev Xurshid</h6>
      <div className={`${sass.Socials}`}>
        <a href="https://github.com/sxnpaii" target="_blank">
          <img className={`${sass.logo}`} src="/icons/github.svg" alt="" />
        </a>
        <a href="https://t.me/sxnpaii" target="_blank">
          <img className={`${sass.logo}`} src="/icons/telegram.svg" alt="" />
        </a>
        <a href="https://linkedin.com/in/sxnpaii" target="_blank">
          <img className={`${sass.logo}`} src="/icons/linkedin.svg" alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
