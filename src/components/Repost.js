import { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { repostPost } from "../services/posts";


Modal.setAppElement("#root");

export function Repost( { postId }) {

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

    async function sendRepost() {
        console.log(postId)
        const response = await repostPost(postId);
        if (!response?.status) alert("Não foi possivel compartilhar o post")
        console.log(response.status);
    }

    return (
        <>
            <ion-icon name="repeat-outline" onClick={openModal}  />
            <p>re-post</p>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Text><p>Do you want to re-post this link?</p></Text>
                <ButtonsSession>
                    <button style={{ color: "#1877F2", backgroundColor: "#FFFFFF" }} onClick={closeModal}>No, cancel</button>
                    <button style={{ color: "#FFFFFF", backgroundColor: "#1877F2" }} onClick={sendRepost}>Yes, share</button>
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

    @media (max-width: 608px) {
        width: 50%;
        p {
            font-size: 25px;
        }
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

    @media (max-width: 608px) {
        width: 50%;

        button {
            width: 120px;
            font-size: 15px;
        }
    }
`