const Modal = ({abrirModal, setAbrirModal, children}) => {
    return (
        <dialog className={`modal ${abrirModal ? "modal-open" : ""}`}>
            <div className="modal-box w-11/12 max-w-5xl">
                <form method="dialog">
                    <button onClick={() => setAbrirModal(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
                </form>
                {children}
            </div>
        </dialog>
    ) 
}

export default Modal;