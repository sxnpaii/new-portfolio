import sass from "@/new-portfolio/styles/components/Modal.module.scss";

const Modal = ({states, func}) => {
    return (
        <section className={states.modal ? sass.Modal : "hidden"}>
            <div className="modalBody text-white">
                <h6 className={`${sass.Text} heading-text`}>Вы уверены этим решением ?</h6>
                <div className={sass.Btns}>
                    <button className={`p-5 basic-text`} onClick={()=>(states.setModal(false))}>Нет</button>
                    <button className={` btn`} onClick={func}>Конечно!</button>
                </div>
            </div>
        </section>
    )
}

export default Modal;