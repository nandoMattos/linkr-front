import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root")

export function Trash() {

    const customStyles = {
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '262px',
            width: '597px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            gap: '25px',
            background: '#333333',
            borderRadius: '50px',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function deletePost() {
        console.log("oi")
    }


    return (
        <>
            <ion-icon onClick={openModal} name="trash"></ion-icon>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Text><p>Are you sure you want to delete this post?</p></Text>
                <ButtonsSession>
                    <button style={{color:"#1877F2", backgroundColor:"#FFFFFF"}} onClick={closeModal}>No, go back</button>
                    <button style={{color:"#FFFFFF", backgroundColor:"#1877F2"}} onClick={deletePost}>Yes, delete it</button>
                </ButtonsSession>
            </Modal>
        </>
    )
}

const Text = styled.div`
    width: 65%;
    p {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 41px;
        text-align: center;
        color: #FFFFFF;
    }
`

const ButtonsSession = styled.div`
    width: 65%;
    display: flex;
    justify-content: space-around;

    button {
        width: 134px;
        height: 37px;
        border-radius: 5px;
        border: none;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
    }
`