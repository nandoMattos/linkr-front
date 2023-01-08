import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root")

export function Trash() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }


    return(
        <>
            <ion-icon name="trash"></ion-icon>
            <Modal>
                
            </Modal>
        </>
    )
}