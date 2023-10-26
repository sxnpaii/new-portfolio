import Link from "next/link";
import {SignInButton, SignOutButton, SignUpButton, useClerk} from "@clerk/nextjs"
// utils 
import {RouteLinks} from "../utils";
//styles
import sass from "@/new-portfolio/styles/components/Header.module.scss";


const Header = (): JSX.Element => {
    const {user} = useClerk()
    return (
        <header className={`fixed w-full left-0 flexbox ${sass.Header}`}>
            <div className={`${sass.logo} flexbox items-center justify-between`}>
                <Link href={`/`} className={` ${sass.Brand} heading-text `}>SXNPAII</Link>
                <button className="sm:hidden" onClick={() => {
                    document.querySelector(`ul`)?.classList.toggle(`${sass.active}`)
                }}>
                    <svg className=" fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24">
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                    </svg>
                </button>
            </div>

            <ul className={`flexbox ${sass.Ul} `}>
                {!user ? RouteLinks.filter(({isPrivate}) => !isPrivate).map(({path, title}) => (
                        <li key={title}>
                            <Link className={`${sass.ListItem} basic-text `} href={path}>{title}</Link>
                        </li>
                    ))
                    :
                    RouteLinks.map(({path, title}) => (
                    <li key={title}>
                        <Link className={`${sass.ListItem} basic-text `} href={path}>{title}</Link>
                    </li>
                ))}
                {
                    user ? (
                        <SignOutButton className={`${sass.ListItem} basic-text`}>Выйти</SignOutButton>
                    ) : (
                        <>
                        <SignInButton className={`${sass.ListItem} basic-text`}>Войти</SignInButton>
                        <SignUpButton className={`${sass.ListItem} basic-text`}>Создать аккаунт</SignUpButton>
                        </>
                    )
                }
            </ul>

        </header>
    )
}
export default Header