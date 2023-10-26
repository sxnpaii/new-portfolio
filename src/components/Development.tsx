import {useEffect} from "react";

import sass from "@/new-portfolio/styles/components/Development.module.scss";

const Development = () => {
    useEffect(() => {
        let closedStatus = sessionStorage.getItem('devModal')
        if (closedStatus === "closed") {
            document.querySelector(`.${sass.Div}`)?.classList.add(`${sass.active}`)
        } else {
            closedStatus = null
        }
    }, [])
    return (
        <div
            className={`${sass.Div}`}>
            <p className={`basic-text`}>
                Проект в разработке, могут быть ошибки и баги.
            </p>
            <img
                width={20}
                src="/icons/close.svg" alt=""
                className={`${sass.Close}`}
                onClick={() => {
                    document.querySelector(`.${sass.Div}`)?.classList.add(`${sass.active}`)
                    sessionStorage.setItem('devModal', "closed")
                }}
            />
        </div>
    )
}

export default Development;