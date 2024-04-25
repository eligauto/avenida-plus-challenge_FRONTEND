import { ModalAlertProps } from "../types";

// Componente Hijo:
// Este componente va a mostrar un mensaje de alerta en un modal
const ModalAlert: React.FC<ModalAlertProps> = ({ isOpen, message, onClose }) => {
    return (
        <div className={`modal fade ${isOpen ? "show d-block" : "d-none"}`} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden={!isOpen}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Transacción realizada</h2>
                    </div>
                    <div className="modal-body">
                        <p>{message}</p>
                    </div>
                    <div className="modal-footer">
                        <button className="custom-btn" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalAlert;