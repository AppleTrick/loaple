import ModalPortal from "./ModalPortal";
import styled from "styled-components";
import { MouseEvent } from "react";
import CharacterAddForm from "./CharacterAddForm";
import CharacterUpdateForm from "./CharacterUpdateForm";
import { CharacterSchedule } from "modules/CharacterSchedule";

type ModalProps = {
    onClose: () => void;
    whatType: string
    getCharacterData ?: CharacterSchedule
}

const Background = styled.div`
    z-index: 999; /* 의문이 들었던 부분 */
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    background-color: #00000033;
`;

const ModalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 999;
    width: 90%;
    height: 75%;
    background-color: white;

    @media(min-width: 768px){
        width: 60%;
    }

    @media(min-width: 1200px){
        width: 35%;
    }
`;


const Modal = ({ onClose, whatType, getCharacterData }: ModalProps) => {

    const backgroundClose = (e: MouseEvent) => {
        if (e.target !== e.currentTarget) return;
        onClose();   
    }

    return (
        <>
            <ModalPortal>
                <Background onClick={(e)=>backgroundClose(e)}>
                    <ModalBox>
                        {whatType === "add" ? <CharacterAddForm onClose={onClose} />
                            : <CharacterUpdateForm onClose={onClose} getCharacterData={getCharacterData} />}
                    </ModalBox>
                </Background>
            </ModalPortal>
        </>
    )
}

export default Modal;