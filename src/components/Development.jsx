import sass from "@/new-portfolio/styles/components/Development.module.scss";

const Development = () => {
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
            onClick={()=>{
                document.querySelector(`.${sass.Div}`)?.classList.add(`${sass.active}`)
                console.log("clicked")
            }}
            />
        </div>
    )
}

export default Development;