import styles from './modals.module.css';

type ModalProps = {
    closeModalButton: () => void;
};

function Modal(props: ModalProps) {
    const { closeModalButton } = props;
    return (
        <div className="modal-overlay">
            <div className="modal"></div>
            <div className={styles.modalClose} onClick={closeModalButton}>
                <h1>Modal</h1>
            </div>
        </div>
    );
}
export default Modal;
