import sass from "@/new-portfolio/styles/components/Modal.module.scss";

const Modal = ({states, func, message }) => {
    return (
        <section className={states.modal ? sass.Modal : "hidden"}>
            <div className="modalBody text-white">
                <h6 className={`${sass.Text} heading-text`}>{!message ? "Вы уверены этим решением ?" : message }</h6>
                <div className={sass.Btns}>
                     { !message ? <button
                        className={`p-5 basic-text`}
                        onClick={() => (states.setModal(false))}>Нет
                    </button>: ""}
                    <button
                        className={`btn`}
                        onClick={func}>
                        {!message ? "Конечно!" : "Понятно."}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Modal;