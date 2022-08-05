import Modal from "components/modal/Modal";
import ModalPortal from "components/modal/ModalPortal";
import { useState } from "react";
import styled from "styled-components";

const AddCharacterButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const AddButton = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 10px;
`

const AddCharacterButton = () => {
    
    const [ModalOpen, setModalOpen] = useState<boolean>(false)

    const modalOn = () => {
        setModalOpen(true);
    }
    const modalClose = () => {
        setModalOpen(false);
    }

    return (
        <AddCharacterButtonDiv>
            <AddButton onClick={modalOn}>추가하기</AddButton>
            {ModalOpen && <Modal onClose={modalClose} />}
        </AddCharacterButtonDiv>
        
    )
}

export default AddCharacterButton;