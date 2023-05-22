import Link from "next/link";
//styles
import sass from "@/new-portfolio/styles/components/Header.module.scss";


const Header = (): JSX.Element  => {
    return (
        <header className={`fixed w-full left-0 flexbox ${sass.Header}`}>
            <div className={`${sass.logo} flexbox items-center justify-between`}>
                <Link href={`/`} className={` ${sass.Brand} heading-text `}>SXNPAII</Link>
                <button className="sm:hidden" onClick={() => {
                    document.querySelector(`ul`)?.classList.toggle(`${sass.active}`)
                }}>
                    <svg className=" fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                </button>
            </div>
            <nav className={``}>
                <ul className={`flexbox ${sass.Ul} `}>
                    <li><Link className={`${sass.ListItem} basic-text `} href="/">Главная</Link></li>
                    <li><Link className={`${sass.ListItem} basic-text `} href="/posts">Посты</Link></li>
                    <li><Link className={`${sass.ListItem} basic-text `} href="/about">Обо мне</Link></li>
                    <li><Link className={`${sass.ListItem} basic-text `} href="/contact">Контакты</Link></li>
                    <li><Link className={`${sass.ListItem} basic-text `} href="/tags">Теги</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header