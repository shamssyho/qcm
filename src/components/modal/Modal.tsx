import { ModalProps } from '../../interfaces/Modal';
import './Modal.css';

const Modal: React.FC<ModalProps> = ({ show, handleClose, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button className="close-button" onClick={handleClose}>
                    Fermer
                </button>
                {children}
            </section>
        </div>
    );
};

export default Modal;