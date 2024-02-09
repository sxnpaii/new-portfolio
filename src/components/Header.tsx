import Link from "next/link";
// utils
import { RouteLinks } from "../utils";
//styles
import sass from "@/new-portfolio/styles/components/Header.module.scss";

const Header = (): JSX.Element => {
  return (
    <header className={`fixed w-full left-0 md:flex ${sass.Header}`}>
      <div className={`${sass.logo} flexbox sm:items-center justify-between`}>
        <Link href={`/`} className={` ${sass.Brand} heading-text`}>
          SXNPAII
        </Link>
        <button
          className="md:hidden"
          onClick={() => {
            document.querySelector(`ul`)?.classList.toggle(`${sass.active}`);
          }}
        >
          <svg
            className=" fill-white"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </button>
      </div>

      <ul className={`flexbox ${sass.Ul} `}>
        {RouteLinks.map(({ path, title }) => (
          <li key={title}>
            <Link className={`${sass.ListItem} basic-text `} href={path}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Header;
