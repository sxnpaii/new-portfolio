import Link from "next/link";
//styles
import sass from "@/new-portfolio/styles/components/Header.module.scss";


const Header = () => {
    return (
        <header className={`fixed w-full left-0 flexbox ${sass.wrapping} ${sass.params}`}>
            <div className="logo flexbox items-center justify-between ">
                <h5 className={`heading-text text-2xl sm:m-0`}>SXNPAII</h5>
                <button className="sm:hidden" onClick={() => {
                    document.querySelector("nav")?.classList.toggle("hidden")
                }}>
                    <svg className=" fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                </button>
            </div>
            <nav>
                <ul className={`flexbox ${sass.wrapping} gap-5 mt-8 sm:mt-0`}>
                    <li><Link className={`${sass.ListItem} basic-text `} href="/">Главная</Link></li>
                    <li><Link className={`${sass.ListItem} basic-text `} href="/posts">Посты</Link></li>
                    <li><Link className={`${sass.ListItem} basic-text `} href="/about">Обо мне</Link></li>
                    <li><Link className={`${sass.ListItem} basic-text `} href="/contact">Контакты</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header