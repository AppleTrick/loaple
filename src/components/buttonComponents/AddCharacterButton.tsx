import Modal from "components/modal/Modal";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";

const AddCharacterButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const AddButton = styled.div`
    height: 50px;
    width: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
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
            <AddButton>
                <AiOutlinePlusCircle onClick={modalOn} fontSize={"2em"} />
            </AddButton>
            {ModalOpen && <Modal onClose={modalClose} />}
        </AddCharacterButtonDiv>
        
    )
}

export default AddCharacterButton;